
import { Injectable } from '@nestjs/common';
import { ACCOUNT } from './account-constants/account.constant';
import { AccountsService } from './accounts.service';

@Injectable()
export class AccountsUtility {

  constructor() { }
 

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
    const data = { ...row };

    data.client_tier = data.client_tier ?? null;
    data.sale_rep_id = data.sale_rep_id ?? null;
    data.csm_rep_id = data.csm_rep_id ?? null;

    data.migration_mode = data.migration_mode || '';

    if (data.trr_system == 5) {
      data.voip_provider = ACCOUNT.VOIP_PROVIDER.CYNERIC;
    } else if (data.trr_system == 9) {
      data.voip_provider =
        ACCOUNT.VOIP_PROVIDER[data.voip_provider_env] ||
        ACCOUNT.VOIP_PROVIDER.TRR_BETA;
    }

    const filtered = Object.fromEntries(
      Object.entries(data).filter(([key]) => allowedFields.includes(key))
    );

    return {
      trr_environment_options: ACCOUNT.OPTIONS.TRR_ENVIRONMENT,
      operators: ACCOUNT.OPTIONS.OPERATORS,
      cluster_node_options: ACCOUNT.OPTIONS.CLUSTER_NODE,
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

}