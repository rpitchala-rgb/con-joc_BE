import { Injectable } from '@nestjs/common';
import { CreateDidOrderDto } from './dto/create-did-order.dto';
import { UpdateDidOrderDto } from './dto/update-did-order.dto';
import { JocDatabaseService } from '../../shared/joc-database/joc-database.service';
import { SearchDidOrderDto } from './dto/search-did-order.dto';
import { AccountsUtility } from '../../modules/accounts/accounts.utility';
import { CommonService } from '../../shared/common/common.service';
import { DidOrdersUtility } from './did-orders.utility';

@Injectable()
export class DidOrdersService {

  constructor(private readonly jocDatabaseService: JocDatabaseService,
    private readonly didOrdersUtility: DidOrdersUtility, private readonly commonService: CommonService
  ) { }

  async getFilteredDidOrders(dto: SearchDidOrderDto): Promise<any> {
    try {
      const page = dto.page ?? 0;
      const limit = dto.limit ?? 20;

      const selectOptions = dto.selectOptions ?? [];
      const orderOptions = dto.orderOptions ?? {};
      const date = dto.date ?? {};

      let conditions: string[] = [];
      let values: any[] = [];

      let i = 0;

      const accountFields = ['name'];

      for (const filter of selectOptions) {
        i++;

        const field = filter.name;
        let operator = filter.operator;
        let value = filter.value;

        if (!field) continue;

        const alias = accountFields.includes(field) ? 'a' : 'd';

        if (field === 'type' && Array.isArray(value) && value.includes('ALL')) {
          value = [
            'BUY', 'MOVE', 'ORDERING', 'REPLACE', 'RELEASE', 'IMPORT',
            'BUY_DEV', 'MOVE_DEV', 'ORDERING_DEV', 'REPLACE_DEV', 'RELEASE_DEV', 'IMPORT_DEV'
          ];
          operator = 'IN';
        }

        if (operator === 'IN' || operator === 'NOT IN') {
          const vals = Array.isArray(value)
            ? value.map((v) => v.trim())
            : value.split(',').map((v) => v.trim());

          const placeholders = vals.map(() => '?').join(',');

          conditions.push(`${alias}.${field} ${operator} (${placeholders})`);
          values.push(...vals);
          continue;
        }

        if (operator === 'IS NULL' || operator === 'IS NOT NULL') {
          conditions.push(`${alias}.${field} ${operator}`);
          continue;
        }

        if (operator === 'IS EMPTY') {
          conditions.push(`${alias}.${field} = ''`);
          continue;
        }

        if (operator === 'IS NOT EMPTY') {
          conditions.push(`${alias}.${field} != ''`);
          continue;
        }

        if (['=', '!=', '>', '<', '>=', '<='].includes(operator)) {
          conditions.push(`${alias}.${field} ${operator} ?`);
          values.push(value);
        }
      }

      if (date?.startDate && date?.endDate) {
        const start = this.commonService.formatDateForMySQL(date.startDate);
        const end = this.commonService.formatDateForMySQL(date.endDate);

        conditions.push(`d.${date.dateType} >= ? AND d.${date.dateType} <= ?`);
        values.push(start, end);
      }

      const whereClause = conditions.length ? conditions.join(' AND ') : '1=1';

      let order = 'ORDER BY d.id DESC';
      if (orderOptions?.name && orderOptions?.value) {
        const alias = accountFields.includes(orderOptions.name) ? 'a' : 'd';
        order = `ORDER BY ${alias}.${orderOptions.name} ${orderOptions.value}`;
      }

      const baseQuery = `
    FROM did_orders d
    JOIN accounts a ON a.id = d.account_id
    WHERE ${whereClause}
  `;

      const dataQuery = `
    SELECT 
      d.id, d.account_id, d.type, d.number_type, d.total_price, d.total_num,
      d.num_processed, d.num_processing, d.num_errored, d.num_imports,
      d.created_at, d.started_processing_at,
      d.status, d.payment_status, d.num_pending_payment, d.dids_entered,
      CASE 
        WHEN d.total_num > 0 AND (d.num_processed/d.total_num)*100 >= 100 THEN 100
        WHEN d.total_num > 0 THEN (d.num_processed/d.total_num)*100
        ELSE 0
      END AS percentage,
      a.name AS account_name,
      a.u_id AS account_u_id,
      a.test_account AS test_account
    ${baseQuery}
    ${order}
    LIMIT ? OFFSET ?
  `;

      const countQuery = `
    SELECT COUNT(d.id) as total
    ${baseQuery}
  `;

      const results = await this.jocDatabaseService.$queryRawUnsafe(
        dataQuery,
        ...values,
        limit,
        page
      );

      const countResult: any = await this.jocDatabaseService.$queryRawUnsafe(
        countQuery,
        ...values
      );

      const safeResults = JSON.parse(JSON.stringify(results, (_, v) =>
        typeof v === 'bigint' ? Number(v) : v
      ));

      const total = Number(countResult[0]?.total || 0);

      const pages = this.commonService.getPaginationLinks(total, limit);
      const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ');

      return {
        found: total,
        results: safeResults,
        one_month_ago: oneMonthAgo,
        pages
      };
    } catch (error) {
      throw new Error(error);
    }
  }

 async getOptions():Promise<any> {
 
  const filters = (await this.didOrdersUtility.getOptions()).filters;
  const operators = (await this.didOrdersUtility.getOptions()).operators;
  const date_type_options = (await this.didOrdersUtility.getOptions()).date_type_options;
  const orderByList = (await this.didOrdersUtility.getOptions()).orderByList;
  const filterByList = (await this.didOrdersUtility.getOptions()).filterByList;

    return {
      success: true,
      code: 200,
      filters,
      operators,
      data: {
        filterByList,
        orderByList,
      },
      date_type_options,
    };
  }


}
