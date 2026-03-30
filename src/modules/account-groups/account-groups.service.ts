import { Injectable } from '@nestjs/common';
import { CreateAccountGroupDto } from './dto/create-account-group.dto';
import { UpdateAccountGroupDto } from './dto/update-account-group.dto';
import { JocDatabaseService } from '../../shared/joc-database/joc-database.service';
import { SearchAccountGroupDto } from './dto/search-account-group.dto';
import { CommonService } from '../../shared/common/common.service';
import { account_groups_status } from '../../../.prisma/joc-client';

@Injectable()
export class AccountGroupsService {
  constructor(private readonly jocDatabaseService: JocDatabaseService,
    private readonly commonService: CommonService
  ) { }

  async getFilteredAccountGroups(dto: SearchAccountGroupDto): Promise<any> {
    try {
      const {
        page = 0,
        inputValue = '',
        start_date,
        end_date,
        limit,
        orderOptions,
        selectOptions = [],
      } = dto;

      const offset = page && limit ? page : 0;

      let where = `WHERE ag.deleted_at IS NULL`;

      if (inputValue) {
        where += `
      AND (
        ag.name LIKE '%${inputValue}%'
        OR ag.status LIKE '%${inputValue}%'
        OR ag.id = ${isNaN(Number(inputValue)) ? 0 : Number(inputValue)}
      )
    `;
      }

      if (start_date) {
        where += ` AND ag.created_at >= '${start_date}'`;
      }

      if (end_date) {
        where += ` AND ag.created_at < '${end_date}'`;
      }

      selectOptions.forEach((opt) => {
        if (!opt.name) return;

        const field = `ag.${opt.name}`;
        let value = opt.value;

        switch (opt.operator) {
          case 'LIKE':
            where += ` AND ${field} LIKE '%${value}%'`;
            break;
          case 'start':
            where += ` AND ${field} LIKE '${value}%'`;
            break;
          case '=':
            where += ` AND ${field} = '${value}'`;
            break;
          case '!=':
            where += ` AND ${field} != '${value}'`;
            break;
          case '>=':
            where += ` AND ${field} >= '${value}'`;
            break;
          case '<=':
            where += ` AND ${field} <= '${value}'`;
            break;
          case '>':
            where += ` AND ${field} > '${value}'`;
            break;
          case '<':
            where += ` AND ${field} < '${value}'`;
            break;
          case 'IN':
            const values = Array.isArray(value)
              ? value.map((v) => `'${v}'`).join(',')
              : value.split(',').map((v) => `'${v?.trim()}'`).join(',');
            where += ` AND ${field} IN (${values})`;
            break;
        }
      });

      let orderBy = `ORDER BY ag.id DESC`;
      if (orderOptions?.name) {
        orderBy = `ORDER BY ag.${orderOptions.name} ${orderOptions.value}`;
      }

      const dataQuery = `
    SELECT 
      ag.id,
      ag.name,
      ag.description,
      ag.status,
      ag.created_at,

      COUNT(DISTINCT aga.account_id) AS accounts,
      COUNT(DISTINCT agu.to_user_id) AS impersonation

    FROM account_groups ag

    LEFT JOIN account_group_accounts aga 
      ON aga.account_group_id = ag.id AND aga.deleted_at IS NULL

    LEFT JOIN account_group_users agu 
      ON agu.account_group_id = ag.id AND agu.deleted_at IS NULL

    ${where}

    GROUP BY ag.id

    ${orderBy}

    ${limit ? `LIMIT ${limit} OFFSET ${offset}` : ''}
  `;

      const countQuery = `
    SELECT COUNT(DISTINCT ag.id) as total
    FROM account_groups ag
    ${where}
  `;

      const results: any[] = await this.jocDatabaseService.$queryRawUnsafe(dataQuery);
      const countResult: any[] = await this.jocDatabaseService.$queryRawUnsafe(countQuery);

      const total = Number(countResult[0]?.total || 0);

      const pages = this.commonService.getPaginationLinks(total, limit || 10);

      return {
        found: total,
        results: results.map((result) => ({
          ...result,
          accounts: Number(result.accounts),
          impersonation: Number(result.impersonation),
        })),
        pages,
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  async createAction(dto: CreateAccountGroupDto): Promise<any> {
    try {

      const insertAccountGroup = await this.jocDatabaseService.account_groups.create({
        data: {
          name: dto.name,
          description: dto.description,
          status: dto.status as account_groups_status,
          created_at: new Date()
        }
      });
      if (!insertAccountGroup) {
        throw "Failed to create account group.";
      } else {
        const result = {
          id: insertAccountGroup.id,
          name: insertAccountGroup.name,
          description: insertAccountGroup.description,
          status: insertAccountGroup.status,
          created_at: insertAccountGroup.created_at
        }
        return result;
      }

    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteAccountGroup(id: number, user_to_delete?: '', accounts_to_delete?: ''): Promise<any> {
    try {
      const accountGroup = await this.jocDatabaseService.account_groups.findFirst({
        where: {
          id: Number(id),
          deleted_at: null
        },
      });

      if (!accountGroup || !id) {
        throw ('Account Group not found ');
      }

      const now = new Date();

      await this.jocDatabaseService.account_groups.updateMany({
        where: {
          id: accountGroup.id,
          deleted_at: null,
        },
        data: {
          deleted_at: now,
        },
      });

      let accountWhere: any = {
        account_group_id: accountGroup.id,
        deleted_at: null,
      };

      if (accounts_to_delete) {
        accountWhere.account_id = {
          in: accounts_to_delete,
        };
      }

      await this.jocDatabaseService.account_group_accounts.updateMany({
        where: accountWhere,
        data: {
          deleted_at: now,
        },
      });


      let userWhere: any = {
        account_group_id: accountGroup.id,
        deleted_at: null,
      };
      if (user_to_delete) {
        userWhere.id = {
          in: user_to_delete,
        };
      } else if (accounts_to_delete) {
        userWhere.OR = [
          { from_account_id: { in: accounts_to_delete } },
          { to_account_id: { in: accounts_to_delete } },
        ];
      }

      await this.jocDatabaseService.account_group_users.updateMany({
        where: userWhere,
        data: {
          deleted_at: now,
        },
      });

      return;

    } catch (error) {
      throw new Error(error);
    }

  }

}
