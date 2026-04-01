import { Injectable } from '@nestjs/common';
import { JocDatabaseService } from 'src/shared/joc-database/joc-database.service';
import { JocMainDatabaseService } from 'src/shared/joc-database/joc-main-database.service';
import { SearchAccountDto } from './dto/search-account.dto';
import { AccountsUtility } from './accounts.utility';
import { CommonService } from '../../shared/common/common.service';
import { ACCOUNT } from './account-constants/account.constant';

@Injectable()
export class AccountsService {
  constructor(
    private readonly jocDataBaseService: JocDatabaseService,
    private readonly jocMainDatabaseService: JocMainDatabaseService,
    private readonly accountUtility: AccountsUtility,
    private readonly commonService: CommonService
  ) {}

  async getAccountOptions(): Promise<any> {
    const filterTemplate = () => ({
      plugins: ['remove_button'],
      options: [] as any[],
      create: false,
      sortField: 'text',
      valueField: 'value',
      labelField: 'text',
      maxItems: 10,
    });

    const filters: Record<string, any> = {
      id: filterTemplate(),
      name: filterTemplate(),
      company_name: filterTemplate(),
      status: filterTemplate(),
      billing_production: filterTemplate(),
      created_at: filterTemplate(),
      cluster_node: filterTemplate(),
      license_seat_count: filterTemplate(),
      tier: filterTemplate(),
      client_tier: filterTemplate(),
      sale_rep_id: filterTemplate(),
      csm_rep_id: filterTemplate(),
      voip_provider_env: filterTemplate(),
      account_type: filterTemplate(),
    };

    const options: Record<string, any> = {};

    // billing_production options
    options['billing_production'] = ACCOUNT.OPTIONS.BILLING_PRODUCTION;
    for (const [id, name] of Object.entries(
      ACCOUNT.OPTIONS.BILLING_PRODUCTION,
    )) {
      filters['billing_production']['options'].push({ value: id, text: name });
    }

    // status options
    options['status'] = ACCOUNT.FULL_STATUS_OPTIONS;
    for (const [id, name] of Object.entries(ACCOUNT.FULL_STATUS_OPTIONS)) {
      filters['status']['options'].push({ value: id, text: name });
    }

    // account_type options
    options['account_type'] = ACCOUNT.FULL_ACCOUNT_TYPE_OPTIONS;
    for (const [id, name] of Object.entries(
      ACCOUNT.FULL_ACCOUNT_TYPE_OPTIONS,
    )) {
      filters['account_type']['options'].push({ value: id, text: name });
    }

    // filterByList & orderByList
    options['filterByList'] = ACCOUNT.FILTER_BY_LIST;
    options['orderByList'] = ACCOUNT.ORDER_BY_LIST;

    // operators: base + IS NULL, IS NOT NULL, NOT IN
    const operators = [
      ...ACCOUNT.OPTIONS.OPERATORS,
      { value: 'IS NULL', name: 'Is Null' },
      { value: 'IS NOT NULL', name: 'Is Not Null' },
      { value: 'NOT IN', name: 'Not In' },
    ];

    // cluster_node options - str_replace('cluster_', '', $a_server) / ucfirst(str_replace('_', ' ', $a_server))
    for (const server of ACCOUNT.CLUSTER_SERVER) {
      filters['cluster_node']['options'].push({
        value: server.replace('cluster_', ''),
        text:
          server.charAt(0).toUpperCase() + server.slice(1).replace(/_/g, ' '),
      });
    }

    // voip_provider_env options
    for (const [key, text] of Object.entries(ACCOUNT.VOIP_PROVIDER)) {
      filters['voip_provider_env']['options'].push({ value: key, text });
    }

    // tier options
    filters['tier']['options'].push({ value: '1', text: 'Turnkey' });
    filters['tier']['options'].push({ value: '2', text: 'Omni' });

    const membersRaw: any[] =
      await this.jocMainDatabaseService.members.findMany({
        distinct: ['username', 'id', 'first_name', 'last_name', 'email'],
      });
    const members: Record<number, string> = {};
    for (const m of membersRaw) {
      members[Number(m.id)] = m.username ? m.username : m.email;
    }
    options['members'] = members;

    const memberOptions = membersRaw.map((m: any) => ({
      value: Number(m.id),
      text: m.username ? m.username : m.email,
    }));
    filters['sale_rep_id']['options'] = memberOptions;
    filters['csm_rep_id']['options'] = memberOptions;

    const clientTierRaw: any[] =
      await this.jocDataBaseService.account_info.findMany({
        distinct: ['client_tier'],
        orderBy: {
          client_tier: 'asc',
        },
      });
    for (const row of clientTierRaw) {
      if (row.client_tier !== null && row.client_tier !== undefined) {
        filters['client_tier']['options'].push({
          value: row.client_tier,
          text: row.client_tier,
        });
      }
    }

    return {
      operators,
      filters,
      data: options,
    };
  }

  async searchAction(dto: SearchAccountDto): Promise<any> {
    try {
      const {
        page = 0,
        inputValue = '',
        orderOptions,
        selectOptions,
        startDate,
        endDate,
        limit = 20,
        exportData,
      } = dto;

      const searchCriteria: any = {};

      for (const option of selectOptions || []) {
        if (!option.name) continue;

        searchCriteria[option.name] = {
          operator: option.operator,
          value: option.value,
        };
      }

      const orderCriteria: any = {};
      if (orderOptions?.name) {
        orderCriteria[orderOptions.name] = orderOptions.value;
      }

      const result: any = await this.getAccounts(
        inputValue,
        limit,
        page,
        searchCriteria,
        orderCriteria,
        startDate,
        endDate,
        exportData,
      );

      if (exportData) {
        const exportArr = result.results.map((row: any) => ({
          id: row.id,
          name: row.name,
          company_name: row.company_name,
          client_tier: row.client_tier,
          license_seat_count: row.license_seat_count,
          status: row.status,
          billing_production: row.billing_production,
          voip_provider_env: row.voip_provider_env,
          sale_rep: row.sale_rep_id,
          csm_rep: row.csm_rep_id,
          cluster_node: row.cluster_node,
          created_at: row.created_at,
          tier: row.tier,
          account_type: row.account_type,
        }));

        return {
          accounts: exportArr,
        };
      }
      const pages = this.commonService.getPaginationLinks(
        result.total_found,
        limit,
      );
      const utilityResponse = await this.accountUtility.formatExportData(
        result.results,
      );
      return {
        found: result.total_found,
        results: utilityResponse,
        pages: pages,
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAccounts(
    inputValue: string,
    limit: number,
    page: number,
    searchCriteria: any,
    orderCriteria: any,
    startDate: any,
    endDate: any,
    exportData: boolean = false,
  ): Promise<any> {
    try {
      const conditions: string[] = [];
      const subConditions: string[] = [];
      const params: any[] = [];

      if (startDate) {
        conditions.push(`a.created_at >= ?`);
        params.push(this.commonService.formatDateForMySQL(startDate));
      }

      if (endDate) {
        conditions.push(`a.created_at < ?`);
        params.push(this.commonService.formatDateForMySQL(endDate));
      }

      for (const key in searchCriteria) {
        let { operator, value } = searchCriteria[key];
        if (!value || (Array.isArray(value) && value.length === 0)) continue;
        const tb = ['client_tier', 'sale_rep_id', 'csm_rep_id'].includes(key)
          ? 'b'
          : 'a';
        if (
          (operator === 'IN' || operator === 'NOT IN') &&
          typeof value === 'string'
        ) {
          value = value.split(',');
        }
        if (
          (operator === 'IN' || operator === 'NOT IN') &&
          key === 'voip_provider_env'
        ) {
          const values = Array.isArray(value) ? value : [value];
          for (const val of values) {
            if (val === 'CYNERIC') {
              subConditions.push(
                `((a.${key} ${operator} ('CYNERIC') OR a.${key} IS NULL) AND a.trr_system = 5)`,
              );
            }
            if (val === 'TRR_PROD') {
              subConditions.push(
                `((a.${key} ${operator} ('TRR_PROD') OR a.${key} IS NULL) AND a.trr_system = 9)`,
              );
            }
            if (val === 'TRR_DEV') {
              subConditions.push(
                `((a.${key} ${operator} ('TRR_DEV')) AND a.trr_system = 9)`,
              );
            }

            if (val === 'TRR_STAGING') {
              subConditions.push(
                `((a.${key} ${operator} ('TRR_STAGING')) AND a.trr_system = 9)`,
              );
            }

            if (val === 'TRR_BETA') {
              subConditions.push(
                `((a.${key} ${operator} ('TRR_BETA') OR a.${key} IS NULL) AND a.trr_system = 9)`,
              );
            }
          }

          continue;
        }
        if (operator === 'IN' || operator === 'NOT IN') {
          const values = Array.isArray(value) ? value : [value];
          const placeholders = values.map(() => '?').join(',');

          conditions.push(`${tb}.${key} ${operator} (${placeholders})`);
          params.push(...values);
        } else if (operator === 'IS NULL' || operator === 'IS NOT NULL') {
          conditions.push(`${tb}.${key} ${operator}`);
        } else {
          conditions.push(`${tb}.${key} ${operator} ?`);
          params.push(value);
        }
      }
      if (subConditions.length > 0) {
        conditions.push(`(${subConditions.join(' OR ')})`);
      }

      if (inputValue) {
        conditions.push(`(a.name LIKE ? OR a.id = ?)`);
        params.push(`%${inputValue}%`, inputValue);
      }

      const whereClause = conditions.length ? conditions.join(' AND ') : '1=1';

      const join = `LEFT JOIN account_info b ON a.id = b.account_id`;

      const countSql = `
      SELECT COUNT(a.id) as total_found
      FROM accounts a
      ${join}
      WHERE ${whereClause}
    `;

      const countRes: any = await this.jocDataBaseService.$queryRawUnsafe(
        countSql,
        ...params,
      );
      const total_found = Number(countRes[0]?.total_found || 0);

      let dataSql = `
      SELECT a.*,b.client_tier, b.sale_rep_id, b.csm_rep_id
      FROM accounts a
      ${join}
      WHERE ${whereClause}
    `;

      if (Object.keys(orderCriteria).length) {
        const key = Object.keys(orderCriteria)[0];
        dataSql += ` ORDER BY a.${key} ${orderCriteria[key]}`;
      }

      const dataParams = [...params];

      if (!exportData) {
        dataSql += ` LIMIT ? OFFSET ?`;
        dataParams.push(limit, page);
      }

      const results = await this.jocDataBaseService.$queryRawUnsafe(
        dataSql,
        ...dataParams,
      );

      return {
        total_found,
        results,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}
