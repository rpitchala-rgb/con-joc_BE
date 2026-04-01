import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { JocDatabaseService } from '../../shared/joc-database/joc-database.service';

@Injectable()
export class TransactionsService {
  constructor(private readonly jocDataBaseService: JocDatabaseService) { }

  async getFailedTransactionsAction(page: number): Promise<any> {
    try {
      const result: any = {
        success: false,
        code: 200,
        first_page_searched: Number(page),
      };

      const data = await this.searchFailedTransactions(page);

      const failed_transactions:any[] = data.failed_transactions;

      for (const tx of Object.values(failed_transactions)) {
        const subscription = await this.jocDataBaseService.subscriptions.findFirst({
          where: { id: tx.subscription_id },
          select: { id: true, account_id: true },
        });

        if (subscription) {
          tx.account_id = subscription.account_id;

          const account = await this.jocDataBaseService.accounts.findFirst({
            where: { id: subscription.account_id },
            select: { id: true, u_id: true },
          });

          if (account) {
            tx.u_id = account.u_id;
          }
        }
      }

      result.success = true;
      result.failed_transactions = Object.values(failed_transactions);
      result.total_results = Object.keys(failed_transactions).length;
      result.last_page_searched = Number(data.last_page_searched);
      result.transactions_searched = Number(data.transactions_searched);

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getFailedTransactionsByAccount(page: number, account_id: number): Promise<any> {
    try {
      const result: any = {
        first_page_searched: Number(page),
      };

      const subscription = await this.jocDataBaseService.subscriptions.findFirst({
        where: { account_id },
        select: { id: true, account_id: true },
      });

      if (!subscription) {
        result.error =
          'No Subscription found with Account ID: ' + account_id;
        return result;
      }

      const data = await this.searchFailedTransactions(
        page,
        subscription.id,
      );

      const account = await this.jocDataBaseService.accounts.findFirst({
        where: { id: account_id },
        select: { id: true, u_id: true },
      });

      const failed_transactions:any[] = data.failed_transactions;

      for (const tx of Object.values(failed_transactions)) {
        tx.account_id = account_id;
        tx.u_id = account?.u_id;
      }

      result.success = true;
      result.failed_transactions = Object.values(failed_transactions);
      result.total_results = Object.keys(failed_transactions).length;
      result.last_page_searched = Number(data.last_page_searched);
      result.transactions_searched = Number(data.transactions_searched);

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }


  async searchFailedTransactions(
    page: number,
    subscription_id?: number,
  ) {
    const result: any = {};

    let transactions_searched = 0;
    const failed_transactions: any = {};

    let search = true;

    do {
      let response: any;

      if (!subscription_id) {
        response = await this.listTransactionsForSite(
          page,
          100,
          'desc',
        );
      } else {
        response =
          await this.listTransactionsForSubscription(
            subscription_id,
            page,
            100,
          );
      }

      if (response) {
        if (response.code === 200) {
          const transactions = JSON.parse(response.response);

          transactions_searched += transactions.length;

          if (transactions.length > 0) {
            for (const t of transactions) {
              const one_transaction = t.transaction;

              if (one_transaction.success !== true) {
                // duplicate check
                if (!failed_transactions[one_transaction.id]) {
                  const created = new Date(
                    one_transaction.created_at,
                  );

                  one_transaction.created_at = created
                    .toISOString()
                    .slice(0, 19)
                    .replace('T', ' ');

                  if (
                    Object.keys(failed_transactions).length < 50
                  ) {
                    failed_transactions[one_transaction.id] =
                      one_transaction;
                  } else {
                    search = false;
                    break;
                  }
                }
              }
            }

            if (search) {
              page++;
            } else {
              break;
            }
          } else {
            break;
          }
        } else {
          break;
        }
      } else {
        break;
      }
    } while (Object.keys(failed_transactions).length < 50);

    result.last_page_searched = page;
    result.transactions_searched = transactions_searched;
    result.failed_transactions = failed_transactions;

    return result;
  }

  async listTransactionsForSite(page, limit, order) {
    return {
      code: 200,
      response: JSON.stringify([]),
    };
  }

  async listTransactionsForSubscription(
    subscription_id,
    page,
    limit,
  ) {
    return {
      code: 200,
      response: JSON.stringify([]),
    };
  }


}
