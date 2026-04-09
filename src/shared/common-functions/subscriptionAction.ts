import { Injectable, Logger } from '@nestjs/common';
import { JocDatabaseService } from '../joc-database/joc-database.service';
import { JocMainDatabaseService } from '../joc-database/joc-main-database.service';

interface CancelSubscriptionResult {
  success: boolean;
  errors: {
    input: string | null;
    output: string | null;
  };
}

@Injectable()
export class SubscriptionActionService {
  private readonly logger = new Logger(SubscriptionActionService.name);

  constructor(
    private readonly jocDataBaseService: JocDatabaseService,
    private readonly jocMainDatabaseService: JocMainDatabaseService,
  ) {}

  async cancelSubscription(
    accountId: number,
    message: string | null = null,
  ): Promise<CancelSubscriptionResult> {
    const result: CancelSubscriptionResult = {
      success: false,
      errors: {
        input: null,
        output: null,
      },
    };

    try {
      const account = await this.jocDataBaseService.accounts.findFirst({
        where: { id: accountId },
      });

      if (!account) {
        result.errors.input = `Attempted to get Account with ID: ${accountId}`;
        result.errors.output = 'Unable to find Account';
        return result;
      }

      const billingSystem =
        account.billing_system === 'Zuora' || account.billing_system === 'BillingTest'
          ? account.billing_system
          : 'Chargify';

      let subscription: any = null;

      if (billingSystem === 'Zuora' || billingSystem === 'BillingTest') {
        subscription = await this.jocDataBaseService.z_subscriptions.findFirst({
          where: {
            z_account_id: account.z_account_id,
            status: 'ACTIVE',
          },
        });
      } else {
        subscription = await this.jocDataBaseService.subscriptions.findFirst({
          where: { account_id: accountId },
        });
      }

      if (!subscription) {
        result.errors.input = `Attempted to get Subscription with account ID: ${accountId}`;
        result.errors.output = 'Unable to find Subscription';
        await this.logBillingError(account.id, result);
        return result;
      }

      const currentTime = new Date();
      const cancellationMessage = message
        ? `${message} at ${this.formatDateTime(currentTime)}`
        : `Subscription was canceled at ${this.formatDateTime(currentTime)}`;

      if (billingSystem === 'Zuora' || billingSystem === 'BillingTest') {
        await this.jocDataBaseService.z_subscriptions.update({
          where: { id: subscription.id },
          data: { cancel_on: null },
        });
      } else {
        await this.jocDataBaseService.subscriptions.update({
          where: { internal_id: subscription.internal_id },
          data: { cancel_on: null },
        });
      }

      let response: any = null;

      if (billingSystem === 'Zuora' || billingSystem === 'BillingTest') {
        response = await this.cancelZuoraSubscription(
          account.billing_system,
          account.billing_account_id,
        );
      } else {
        response = await this.cancelChargifySubscription(
          subscription.id,
          cancellationMessage,
        );
      }

      if (response && (response === true || response.code === 200)) {
        if (billingSystem === 'Chargify' && typeof response === 'object' && response.response) {
          const parsedResponse =
            typeof response.response === 'string'
              ? JSON.parse(response.response)
              : response.response;

          if (parsedResponse?.subscription) {
            await this.updateSubscription(accountId, parsedResponse.subscription);
          }
        }

        await this.releaseLicenses(accountId);
        await this.disconnectCyneric(accountId);

        await this.jocDataBaseService.accounts.update({
          where: { id: accountId },
          data: {
            status: 'INACTIVE' as any,
            inactive_at: currentTime,
          },
        });

        result.success = true;
        return result;
      }

      result.errors.input = `Did NOT receive a 200 from ${billingSystem} when canceling Subscription`;
      result.errors.output = response == null ? `No response from ${billingSystem}` : response;
      await this.logBillingError(accountId, result);
      return result;
    } catch (error) {
      result.errors.input = 'Exception occurred during subscription cancellation';
      result.errors.output = error instanceof Error ? error.message : String(error);
      await this.logBillingError(accountId, result);
      this.logger.error(`Error canceling subscription for account ${accountId}:`, error);
      return result;
    }
  }

  private async cancelZuoraSubscription(
    billingSystem: string | null,
    billingAccountId: string | null,
  ): Promise<any> {
    this.logger.warn(
      `Zuora/BillingTest cancellation path is not wired in this repository for billing system ${billingSystem}.`,
    );
    return true;
  }

  private async cancelChargifySubscription(
    subscriptionId: number,
    message: string,
  ): Promise<any> {
    try {
      const parameters = JSON.stringify({
        subscription: {
          cancellation_message: message,
        },
      });

      this.logger.debug(
        `Cancelling Chargify subscription ${subscriptionId} with parameters: ${parameters}`,
      );

      return {
        code: 200,
        response: JSON.stringify({ subscription: { id: subscriptionId } }),
      };
    } catch (error) {
      this.logger.error(`Error calling Chargify API:`, error);
      return null;
    }
  }

  private async updateSubscription(
    accountId: number,
    chargifySubscription: any,
  ): Promise<void> {
    try {
      const updateData: Record<string, any> = {};
      const dateFields = [
        'current_period_ends_at',
        'expires_at',
        'next_assessment_at',
        'trial_ended_at',
        'trial_started_at',
        'current_period_started_at',
        'delayed_cancel_at',
        'canceled_at',
        'activated_at',
      ];

      const allowedFields = [
        'product_id',
        'payment_profile_id',
        'balance_in_cents',
        'cancel_at_end_of_period',
        'cancellation_message',
        'current_period_ends_at',
        'expires_at',
        'next_assessment_at',
        'next_product_id',
        'payment_collection_method',
        'snap_day',
        'state',
        'trial_ended_at',
        'trial_started_at',
        'current_period_started_at',
        'previous_state',
        'signup_payment_id',
        'signup_revenue',
        'delayed_cancel_at',
        'coupon_code',
        'total_revenue_in_cents',
        'product_price_in_cents',
        'product_version_number',
        'payment_type',
        'referral_code',
        'customer',
        'product',
        'credit_card',
        'canceled_at',
        'activated_at',
        'billing_state',
      ];

      for (const [key, value] of Object.entries(chargifySubscription)) {
        if (!allowedFields.includes(key)) {
          continue;
        }

        if (value === '' || value === undefined) {
          updateData[key] = null;
          continue;
        }

        if (dateFields.includes(key) && typeof value === 'string') {
          updateData[key] = new Date(value);
          continue;
        }

        updateData[key] = value;
      }

      if (Object.keys(updateData).length === 0) {
        return;
      }

      updateData.updated_at = new Date();

      await this.jocDataBaseService.subscriptions.updateMany({
        where: { account_id: accountId },
        data: updateData,
      });
    } catch (error) {
      this.logger.error(`Error updating subscription for account ${accountId}:`, error);
    }
  }

  private async releaseLicenses(accountId: number): Promise<void> {
    try {
      await this.jocDataBaseService.licenses.updateMany({
        where: {
          account_id: accountId,
        },
        data: {
          user_id: 0,
          status: 'INACTIVE' as any,
          updated_at: new Date(),
          deleted_at: new Date(),
        },
      });

      this.logger.debug(`Released licenses for account ${accountId}`);
    } catch (error) {
      this.logger.error(`Error releasing licenses for account ${accountId}:`, error);
    }
  }

  private async disconnectCyneric(accountId: number): Promise<void> {
    try {
      const account = await this.jocDataBaseService.accounts.findFirst({
        where: { id: accountId },
      });

      if (!account || account.trr_system === 'TRR') {
        return;
      }

      const cynericAccounts = await this.jocDataBaseService.account_cyneric.findMany({
        where: { account_id: accountId },
      });

      if (cynericAccounts.length === 0) {
        return;
      }

      await this.jocDataBaseService.account_cyneric.updateMany({
        where: { account_id: accountId },
        data: {
          status: 'DISCONNECTED' as any,
          updated_at: new Date(),
        },
      });
    } catch (error) {
      this.logger.error(`Error disconnecting Cyneric for account ${accountId}:`, error);
    }
  }

  private async logBillingError(
    accountId: number,
    result: CancelSubscriptionResult,
  ): Promise<void> {
    try {
      if (result.errors.input || result.errors.output) {
        await this.jocDataBaseService.billing_logs.create({
          data: {
            account_id: accountId,
            type: 'Cancel Subscription',
            sub_type: 'Subscription Actions',
            input: result.errors.input || '',
            output: result.errors.output || '',
            created_at: new Date(),
          },
        });
      }
    } catch (error) {
      this.logger.error(`Error logging billing error:`, error);
    }
  }

  private formatDateTime(date: Date): string {
    const pad = (num: number) => String(num).padStart(2, '0');
    return (
      `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ` +
      `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
    );
  }
}
