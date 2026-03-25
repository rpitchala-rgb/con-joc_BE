import { Injectable } from '@nestjs/common';
import { JocDatabaseService } from 'src/shared/joc-database/joc-database.service';
import { SearchAccountDto } from './dto/search-account.dto';
import { AccountsUtility } from './accounts.utility';

@Injectable()
export class AccountsService {

  constructor(private readonly jocDataBaseService: JocDatabaseService,
    private readonly accountUtility:AccountsUtility
  ) { }

  async searchAction(dto: SearchAccountDto): Promise<any> {
    try{
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


    const pages = this.accountUtility.getPaginationLinks(
      result.total_found,
      limit,
    );

    const utilityResponse = await this.accountUtility.formatExportData(result.results);

    return {
        found: result.total_found,
        results: utilityResponse,
        pages: pages,
    };
  }catch(error){
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
  ):Promise<any> {
    try{
    const conditions: string[] = [];
    const subConditions: string[] = [];
    const params: any[] = [];

    if (startDate) {
      conditions.push(`a.created_at >= ?`);
      params.push(this.accountUtility.formatDateForMySQL(startDate));
    }

    if (endDate) {
      conditions.push(`a.created_at < ?`);
      params.push(this.accountUtility.formatDateForMySQL(endDate));
    }

    for (const key in searchCriteria) {
      const { operator, value } = searchCriteria[key];

      if (!value || (Array.isArray(value) && value.length === 0)) continue;

      const tb = ['client_tier', 'sale_rep_id', 'csm_rep_id'].includes(key)
        ? 'b'
        : 'a';

      if (operator === 'IN' || operator === 'NOT IN') {
        const values = Array.isArray(value) ? value : [value];

        const placeholders = values.map(() => '?').join(',');
        conditions.push(`${tb}.${key} ${operator} (${placeholders})`);

        params.push(...values);
      }

      else if (operator === 'IS NULL' || operator === 'IS NOT NULL') {
        conditions.push(`${tb}.${key} ${operator}`);
      }

      else {
        conditions.push(`${tb}.${key} ${operator} ?`);
        params.push(value);
      }
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
    SELECT a.*, b.client_tier, b.sale_rep_id, b.csm_rep_id
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
  }catch(error){
      throw new Error(error);
  }
}


}
