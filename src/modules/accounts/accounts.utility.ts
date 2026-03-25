
import { Injectable } from '@nestjs/common';
import { ACCOUNT } from './account-constants/account.constant';
import { AccountsService } from './accounts.service';

@Injectable()
export class AccountsUtility {

    constructor() {}
    public getPaginationLinks(total: number, limit: number) {
    const totalPages = Math.ceil(total / limit);

    const pages: Record<number, number> = {};

    const firstPages = Math.min(5, totalPages);

    for (let i = 0; i < firstPages; i++) {
      const offset = i * limit;
      pages[offset] = i + 1;
    }

    if (totalPages > 5) {
      const lastPageIndex = totalPages - 1;
      const lastOffset = lastPageIndex * limit;

      pages[lastOffset] = totalPages;
    }

    return pages;
  }

  async formatExportData(results: any[]): Promise<any> {
      const allowedFields = [
      'id', 'u_id', 'name', 'company_name', 'country', 'website',
      'local_gmt', 'status', 'master_server', 'cluster_node',
      'account_type', 'default_caller_id', 'default_gmt',
      'extend_delinquent_period', 'minimum_seat',
      'minimum_seat_expired_at', 'contract_start_date',
      'created_at', 'updated_at', 'billing_production',
      'test_account', 'tier', 'multi_process',
      'multi_process_auto_dial', 'license_seat_count',
      'security_compliance', 'primary_data_center',
      'default_audio_format', 'billing_account_id',
      'z_account_id', 'billing_system', 'trr_system',
      'iva_managed_service', 'externally_managed_account',
      'voip_provider_env', 'host_group_name',
      'use_hostgroup', 'migration_mode',
      'client_tier', 'sale_rep_id', 'csm_rep_id', 'voip_provider'
    ];

    const filteredResults = results.map((row: any) => {
      const filtered = Object.fromEntries(
        Object.entries(row).filter(([key]) => allowedFields.includes(key))
      );
      return { 
        default_gmt_options: ACCOUNT.DEFAULT_GMT,
        country_options: ACCOUNT.COUNTRY,
        billing_production_options: ACCOUNT.BILLING_SYSTEM,
        test_account_options: ACCOUNT.TEST_ACCOUNT,
        status_options: ACCOUNT.STATUS,
        tier_options: ACCOUNT.TIER,
        multi_process_options: ACCOUNT.MULTI_PROCESS,
        multi_process_auto_dial_options: ACCOUNT.MULTI_PROCESS_AUTO_DIAL,
        security_compliance_options: ACCOUNT.SECURITY_COMPLIANCE,
        extend_delinquent_period_options: ACCOUNT.EXTEND_DELINQUENT_PERIOD,
        default_audio_format_options: ACCOUNT.DEFAULT_AUDIO_FORMAT,
        account_type_options: ACCOUNT.ACCOUNT_TYPE,
        migration_mode_options: ACCOUNT.MIGRATION_MODE,
        iva_managed_service_options: ACCOUNT.IVA_MANAGED_SERVICE,
        externally_managed_account_options: ACCOUNT.EXTERNALLY_MANAGED_ACCOUNT,
        ...filtered,
      };
    });
    return filteredResults;
}


formatDateForMySQL(date: string | Date): string {
  const d = new Date(date);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ` +
         `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

}