import { Injectable } from '@nestjs/common';
import { JocDatabaseService } from '../../shared/joc-database/joc-database.service';
import { JocMainDatabaseService } from '../../shared/joc-database/joc-main-database.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { SearchAccountDto } from './dto/search-account.dto';
import { AccountsUtility } from './accounts.utility';
import { CommonService } from '../../shared/common/common.service';
import { ACCOUNT, ACCOUNT_INFO, providers_array } from './account-constants/account.constant';
import { UpdateAccountDto } from './dto/update-account.dto';
import { CreateNotesDto } from './dto/create-notes.dto';
import { Utility } from '../../shared/utility/utility';
import { safesoft_encrypt_decrypt_key } from '../../shared/constants/constants';
import { USER } from '../user/user-constants/user-constant';
import { AsteriskDatabaseService } from '../../shared/joc-database/asterisk-database.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { projectxApiService } from '../../shared/projectX_Api/projectx-api.service';
import { MoveUserDto } from './dto/move-user.dto';
import { GetTransactionLogsDto } from './dto/get-transaction-logs.dto';


@Injectable()
export class AccountsService {
  constructor(
    private readonly jocDataBaseService: JocDatabaseService,
    private readonly jocMainDatabaseService: JocMainDatabaseService,
    private readonly asteriskDatabaseService: AsteriskDatabaseService,
    private readonly accountUtility: AccountsUtility,
    private readonly commonService: CommonService,
    private readonly utility: Utility,
    private readonly projectXApi : projectxApiService

  ) { }



  async createAction(dto: CreateAccountDto, currentUserId?: number): Promise<any> {
    const data = {
      success: false,
      status: 403,
      text: 'Data is missing!',
    };

    if (!dto?.data) {
      return data;
    }

    const {
      first_name,
      last_name,
      title,
      company,
      company_url,
      email,
      password,
      default_gmt,
      default_caller_id,
      country,
      security_compliance,
      test_account,
      minimum_seats,
      minimum_seats_expire,
      contract_start_date,
    } = dto.data;

    const sanitizedFirstName = this.accountUtility.sanitizeAlphaNumeric(first_name);
    const sanitizedLastName = this.accountUtility.sanitizeAlphaNumeric(last_name);
    const sanitizedTitle = this.accountUtility.sanitizeAlphaNumeric(title);
    const sanitizedCompany = this.accountUtility.sanitizeAlphaNumeric(company);

    const existingUser = await this.jocDataBaseService.users.findFirst({
      where: { email },
      select: { id: true },
    });

    if (existingUser) {
      throw { Success: false, code: 403, message: "Such email already exists!" };
    }

    const now = new Date();
    const memberId = currentUserId || ACCOUNT.DEFAULTS.FALLBACK_MEMBER_ID;

    // Step 1: Create account
    const account = await this.jocDataBaseService.accounts.create({
      data: {
        u_id: this.accountUtility.generateRandomString(32),
        local_gmt: ACCOUNT.DEFAULTS.LOCAL_GMT,
        name: this.accountUtility.formatAccountName(sanitizedCompany),
        website: company_url,
        company_name: sanitizedCompany,
        status: ACCOUNT.DEFAULTS.STATUS as any,
        default_caller_id,
        default_gmt,
        country,
        minimum_seat: Number(minimum_seats || 0),
        minimum_seat_expired_at: minimum_seats_expire
          ? new Date(minimum_seats_expire)
          : null,
        contract_start_date: contract_start_date
          ? new Date(contract_start_date)
          : null,
        billing_production: ACCOUNT.DEFAULTS.BILLING_PRODUCTION as any,
        test_account: (test_account || ACCOUNT.DEFAULTS.TEST_ACCOUNT) as any,
        security_compliance: Number(
          security_compliance || ACCOUNT.DEFAULTS.SECURITY_COMPLIANCE,
        ),
        tier: ACCOUNT.DEFAULTS.TIER,
        voip_provider_env: ACCOUNT.DEFAULTS.VOIP_PROVIDER_ENV as any,
        created_at: now,
      },
    });

    const jsonSettings: string | null = this.accountUtility.jsonSettingsBuilder(account);

    // Step 3: Create account_info
    await this.jocDataBaseService.account_info.upsert({
      where: { account_id: account.id },
      create: {
        account_id: account.id,
        password_complexity: ACCOUNT.DEFAULTS.PASSWORD_COMPLEXITY,
        sale_rep_id: memberId,
        csm_rep_id: memberId,
        voso_ai_csm_id: ACCOUNT.DEFAULTS.VOSO_AI_CSM_ID,
        object_limitation: JSON.stringify(this.accountUtility.buildObjectLimitation()),
        json_settings: jsonSettings,
      },
      update: {
        password_complexity: ACCOUNT.DEFAULTS.PASSWORD_COMPLEXITY,
        sale_rep_id: memberId,
        csm_rep_id: memberId,
        object_limitation: JSON.stringify(this.accountUtility.buildObjectLimitation()),
        json_settings: jsonSettings,
      },
    });

    // Step 4: Get next user id
    const lastUser = await this.jocDataBaseService.users.findFirst({
      orderBy: { id: 'desc' },
      select: { id: true },
    });
    const nextUserId = (lastUser?.id || 0) + 1;
    const salt = this.accountUtility.generateRandomString(32);
    const hashedPassword = this.accountUtility.hashPassword(password || '', salt);

    // Step 5: Create user
    await this.jocDataBaseService.users.create({
      data: {
        id: nextUserId,
        u_id: this.accountUtility.generateRandomString(32),
        account_id: account.id,
        first_name: sanitizedFirstName,
        last_name: sanitizedLastName,
        email: email || '',
        contact_email: email || '',
        salt,
        algo: ACCOUNT.DEFAULTS.PASSWORD_ALGO,
        password: hashedPassword,
        title: sanitizedTitle || '',
        remote_session: ACCOUNT.DEFAULTS.REMOTE_SESSION as any,
        email_verification_key: this.accountUtility.generateRandomString(32),
        created_at: now,
      },
    });

    // Step 6: Create user_password history
    await this.jocDataBaseService.user_password.createMany({
      data: [{
        user_id: nextUserId,
        salt,
        password: hashedPassword,
        created_at: now,
      }],
    });
    //implement the logic in this function
    await this.accountUtility.createTestAccountFakeSubscription(account.id);

    return {
      u_id: account.u_id,
    };
  }

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
      const pages = this.commonService.getPaginationLink(
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

  // ─── PUT: save account ───────────────────────────────────────────────────────
  async updateAction(u_id: string, updateAccountDto: UpdateAccountDto): Promise<any> {
    try {
      const { CurrentOptions: options } = updateAccountDto;
      //const { ...options } = dto;
      const account: any = await this.jocDataBaseService.accounts.findFirst({
        where: { u_id },
      });

      if (!account) {
        throw 'Account not found!';
      }

      const accountId: number = account.id;

      // Validate auto_pro_did_limit – only digits allowed
      if (options.auto_pro_did_limit !== undefined) {
        if (!/^\d+$/.test(String(options.auto_pro_did_limit))) {
          return {
            success: false,
            code: 400,
            text: "Only numbers are allowed in 'DID Limitations per License'.",
          };
        }
      }

      // Fetch or create account_info
      let accountInfo: any = await this.jocDataBaseService.account_info.findFirst({
        where: { account_id: accountId },
      });
      const isNewAccountInfo = !accountInfo;
      if (!accountInfo) {
        accountInfo = { account_id: accountId, json_settings: null };
      }

      // ── disclaimerChanged: nullify last_agreed_to_terms_at on cluster ────────
      if (options.disclaimerChanged && account.cluster_node) {
        await this.jocDataBaseService.$executeRawUnsafe(
          `UPDATE users SET last_agreed_to_terms_at = NULL WHERE account_id = ? AND deleted_at IS NULL`,
          accountId,
        );
      }

      // ── account_info scalar fields ──────────────────────────────────────────
      const accountInfoUpdate: Record<string, any> = {};

      if (options.password_complexity !== undefined)
        accountInfoUpdate['password_complexity'] = options.password_complexity;
      if (options.additional_lead_field !== undefined)
        accountInfoUpdate['additional_lead_field'] = options.additional_lead_field;
      if (options.log_lead_changes !== undefined)
        accountInfoUpdate['log_lead_changes'] = options.log_lead_changes;
      if (options.exclude_from_revenue_report !== undefined)
        accountInfoUpdate['exclude_from_revenue_report'] = options.exclude_from_revenue_report;
      if (options.is_in_testbed !== undefined)
        accountInfoUpdate['is_in_testbed'] = options.is_in_testbed;
      if (options.sale_rep_id !== undefined)
        accountInfoUpdate['sale_rep_id'] = Number(options.sale_rep_id);
      if (options.backup_sale_rep_id !== undefined)
        accountInfoUpdate['backup_sale_rep_id'] = Number(options.backup_sale_rep_id);
      if (options.csm_rep_id !== undefined)
        accountInfoUpdate['csm_rep_id'] = Number(options.csm_rep_id);
      if (options.backup_csm_rep_id !== undefined)
        accountInfoUpdate['backup_csm_rep_id'] = Number(options.backup_csm_rep_id);
      if (options.disclaimer !== undefined)
        accountInfoUpdate['disclaimer'] = options.disclaimer;
      if (options.show_tos_on_agent_app !== undefined)
        accountInfoUpdate['show_tos_on_agent_app'] = options.show_tos_on_agent_app;
      if (options.hopper_custom_field_order !== undefined)
        accountInfoUpdate['hopper_custom_field_order'] = options.hopper_custom_field_order;
      if (options.talkdesk_id !== undefined)
        accountInfoUpdate['talkdesk_id'] = options.talkdesk_id;
      if (options.voso_ai_csm_id !== undefined)
        accountInfoUpdate['voso_ai_csm_id'] = Number(options.voso_ai_csm_id ?? 0);
      else
        accountInfoUpdate['voso_ai_csm_id'] = 0;

      // preserve_log_expire_at: parse datetime or set null
      if (options.preserve_log_expire_at !== undefined) {
        const parsed = new Date(options.preserve_log_expire_at);
        accountInfoUpdate['preserve_log_expire_at'] = isNaN(parsed.getTime())
          ? null
          : parsed;
      }

      // ── preview_dial_restriction ─────────────────────────────────────────────
      if (options.preview_dial_restriction !== undefined) {
        const original = accountInfo?.preview_dial_restriction ?? 'N';
        accountInfoUpdate['preview_dial_restriction'] = options.preview_dial_restriction;

        if (
          original !== options.preview_dial_restriction &&
          options.preview_dial_restriction === 'Y' &&
          account.cluster_node
        ) {
          //Get Omni Connection campaigns table is in omni DB.
          await this.jocDataBaseService.$executeRawUnsafe(
            `UPDATE campaigns SET dial_method = 'MANUAL', preview_dial_timeout_action = 'NOTREADY' WHERE account_id = ? AND dial_method NOT IN('MANUAL','INBOUND_MAN')`,
            accountId,
          );
          await this.jocDataBaseService.$executeRawUnsafe(
            `UPDATE campaigns SET preview_dial_timeout_action = 'NOTREADY', preview_dial_timeout = 0 WHERE account_id = ? AND dial_method IN('MANUAL','INBOUND_MAN')`,
            accountId,
          );

          const campaignGroups: any[] = await this.jocDataBaseService.$queryRawUnsafe(
            `SELECT id FROM campaign_groups WHERE account_id = ?`,
            accountId,
          );
          const groupIds: number[] = campaignGroups.map((g: any) => g.id);

          if (groupIds.length > 0) {
            const placeholders = groupIds.map(() => '?').join(',');
            const now = this.accountUtility.formatDateForMySQL(new Date());
            await this.jocDataBaseService.$executeRawUnsafe(
              `UPDATE campaign_group_items SET deleted_at = ? WHERE campaign_group_id IN (${placeholders})`,
              now,
              ...groupIds,
            );
            await this.jocDataBaseService.$executeRawUnsafe(
              `UPDATE campaign_groups SET deleted_at = ? WHERE account_id = ?`,
              now,
              accountId,
            );
          }
        }
      }

      // ── json_settings fields (set via accountUtility.jsonSettingsFormatted) ──
      let jsonSettings: string | null = accountInfo?.json_settings ?? null;

      if (options.enable_sms_testing !== undefined) {
        const val = options.enable_sms_testing === 'Y';
        jsonSettings = this.accountUtility.jsonSettingsFormatted(jsonSettings, 'enable_sms_voip', String(val), 'set', 'dev_settings');
      }
      if (options.enable_overlay_matching !== undefined) {
        jsonSettings = this.accountUtility.jsonSettingsFormatted(jsonSettings, 'enable_overlay_matching', options.enable_overlay_matching, 'set');
      }
      if (options.enable_contact_email_validation !== undefined) {
        jsonSettings = this.accountUtility.jsonSettingsFormatted(jsonSettings, 'enable_contact_email_validation', options.enable_contact_email_validation, 'set');
      }
      if (options.enable_multi_factored_authentication !== undefined) {
        jsonSettings = this.accountUtility.jsonSettingsFormatted(jsonSettings, 'enable_multi_factored_authentication', options.enable_multi_factored_authentication, 'set');
      }
      if (options.attestation_level !== undefined) {
        // Only update if value changed; skip external call (voice_routing_service not in scope)
        jsonSettings = this.accountUtility.jsonSettingsFormatted(jsonSettings, 'attestation_level', options.attestation_level, 'set');
      }
      if (options.enable_debounce_sms !== undefined) {
        jsonSettings = this.accountUtility.jsonSettingsFormatted(jsonSettings, 'enable_debounce_sms', options.enable_debounce_sms, 'set', 'dev_settings');
      }
      if (options.enable_camp_reg_staging !== undefined) {
        jsonSettings = this.accountUtility.jsonSettingsFormatted(jsonSettings, 'enable_camp_reg_staging', options.enable_camp_reg_staging, 'set');
      }
      if (options.sms_inbound_redirect !== undefined) {
        jsonSettings = this.accountUtility.jsonSettingsFormatted(jsonSettings, 'sms_inbound_redirect', options.sms_inbound_redirect, 'set', 'dev_settings');
      }
      if (options.enable_iva_react_ui !== undefined) {
        const val = options.enable_iva_react_ui === 'Y';
        jsonSettings = this.accountUtility.jsonSettingsFormatted(jsonSettings, 'enable_iva_react_ui', String(val), 'set', 'dev_settings');
      }
      if (options.enable_ccid_remediation !== undefined) {
        jsonSettings = this.accountUtility.jsonSettingsFormatted(jsonSettings, 'enable_ccid_remediation', options.enable_ccid_remediation, 'set', 'dev_settings');
      }
      if (options.enable_dedicated_sms !== undefined) {
        jsonSettings = this.accountUtility.jsonSettingsFormatted(jsonSettings, 'enable_dedicated_sms', options.enable_dedicated_sms, 'set');
      }
      if (options.auto_pro_did_limit !== undefined) {
        jsonSettings = this.accountUtility.jsonSettingsFormatted(jsonSettings, 'auto_pro_did_limit', String(options.auto_pro_did_limit), 'set');
      }

      // ── enable_password_rotation: also reset user password timestamps ────────
      if (options.enable_password_rotation !== undefined) {
        jsonSettings = this.accountUtility.jsonSettingsFormatted(jsonSettings, 'enable_password_rotation', options.enable_password_rotation, 'set');

        if (options.enable_password_rotation === 'Y') {
          const users: any[] = await this.jocDataBaseService.users.findMany({
            where: { account_id: accountId },
          });
          const now = new Date();
          for (let user of users) {
            const userPassword: any = await this.jocDataBaseService.user_password.findFirst({
              where: { user_id: user.id },
              orderBy: { created_at: 'desc' },
            });
            if (!userPassword) {
              await this.jocDataBaseService.user_password.create({
                data: {
                  user_id: user.id,
                  salt: user.salt,
                  password: user.password,
                  created_at: now,
                },
              });
            } else {
              await this.jocDataBaseService.user_password.updateMany({
                where: { user_id: user.id },
                data: { created_at: now },
              });
            }
          }
        }
      }

      accountInfoUpdate['json_settings'] = jsonSettings;

      // ── persist account_info ─────────────────────────────────────────────────
      if (isNewAccountInfo) {
        throw " Account info not found for account_id ";
      } else {
        await this.jocDataBaseService.account_info.update({
          where: { account_id: accountId },
          data: accountInfoUpdate,
        });
      }

      // ── handle status transitions ────────────────────────────────────────────
      // INACTIVE → ACTIVE: connectCynericAccounts (skip external call, logged)
      // non-INACTIVE → INACTIVE: cancelSubscription (skip external call, set inactive_at)
      const accountUpdate: Record<string, any> = {};

      if (options.status === 'INACTIVE' && account.status !== 'INACTIVE') {
        const cancellationMessage = 'Subscription was canceled via INACTIVE account status';
        await this.accountUtility.cancelSubscription(accountId, cancellationMessage);
        accountUpdate['inactive_at'] = new Date();
      }

      // ── set updatable account scalar fields ─────────────────────────────────
      for (const field of ACCOUNT_INFO.UPDATABLE_FIELDS) {
        if ((options as any)[field] !== undefined) {
          let val: any = (options as any)[field];
          if (val === '') val = null;
          accountUpdate[field] = val;
        }
      }

      // ── demo_expired_at ──────────────────────────────────────────────────────
      if (options.demo_expired_at !== undefined && options.demo_expired_at !== null) {
        const d = new Date(options.demo_expired_at);
        d.setHours(23, 59, 59);
        accountUpdate['demo_expired_at'] = d;
      }

      // ── delinquent_at logic ──────────────────────────────────────────────────
      if (options.status === 'DELINQUENT') {
        if (!account.delinquent_at) {
          accountUpdate['delinquent_at'] = new Date();
        }
      } else if (options.status !== 'INACTIVE') {
        accountUpdate['delinquent_at'] = null;
        accountUpdate['inactive_at'] = null;
      }

      // ── if status changed to ACTIVE, clear inactive_at ───────────────────────
      if (options.status === 'ACTIVE') {
        accountUpdate['inactive_at'] = null;
      }

      // ── migration_mode ───────────────────────────────────────────────────────
      if (options.migration_mode !== undefined) {
        accountUpdate['migration_mode'] = options.migration_mode === '' ? null : options.migration_mode;
      }

      accountUpdate['updated_at'] = new Date();

      await this.jocDataBaseService.accounts.update({
        where: { id: accountId },
        data: accountUpdate,
      });

      const new_u_id = (await this.jocDataBaseService.accounts.findFirst({ where: { id: accountId }, select: { u_id: true } }))?.u_id;

      return {
        u_id,
        new_u_id: new_u_id
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  // ─── GET: fetch account for edit form (GET branch of saveAction) ─────────────
  async getSaveAction(u_id: string): Promise<any> {
    try {
      const account: any = await this.jocDataBaseService.accounts.findFirst({
        where: { u_id },
      });

      if (!account) {
        throw 'Account not found!';
      }

      const accountId: number = account.id;
      const accountInfo: any = await this.jocDataBaseService.account_info.findFirst({
        where: { account_id: accountId },
      });

      const jsonSettingsArr: Record<string, any> = accountInfo?.json_settings
        ? JSON.parse(accountInfo.json_settings)
        : {};

      const currentOptions: Record<string, any> = {};
      const options: Record<string, any> = {};

      // ── scalar accountInfo fields ─────────────────────────────────────────────
      currentOptions['password_complexity'] = accountInfo?.password_complexity ?? ACCOUNT_INFO.DEFAULTS.PASSWORD_COMPLEXITY;
      options['password_complexity'] = ACCOUNT_INFO.PASSWORD_COMPLEXITY_OPTIONS;

      currentOptions['preview_dial_restriction'] = accountInfo?.preview_dial_restriction ?? ACCOUNT_INFO.DEFAULTS.PREVIEW_DIAL_RESTRICTION;
      options['preview_dial_restriction'] = ACCOUNT_INFO.PREVIEW_DIAL_RESTRICTION_OPTIONS;

      currentOptions['additional_lead_field'] = accountInfo?.additional_lead_field ?? ACCOUNT_INFO.DEFAULTS.ADDITIONAL_LEAD_FIELD;
      options['additional_lead_field'] = ACCOUNT_INFO.ADDITIONAL_LEAD_FIELD_OPTIONS;

      currentOptions['log_lead_changes'] = accountInfo?.log_lead_changes ?? ACCOUNT_INFO.DEFAULTS.LOG_LEAD_CHANGES;
      options['log_lead_changes'] = ACCOUNT_INFO.LOG_LEAD_CHANGES_OPTIONS;

      currentOptions['exclude_from_revenue_report'] = accountInfo?.exclude_from_revenue_report ?? ACCOUNT_INFO.DEFAULTS.EXCLUDE_FROM_REVENUE_REPORT;
      options['exclude_from_revenue_report'] = ACCOUNT_INFO.EXCLUDE_FROM_REVENUE_REPORT_OPTIONS;

      currentOptions['multi_process'] = account.multi_process;
      options['multi_process'] = Object.entries(ACCOUNT.MULTI_PROCESS).map(([v, n]) => ({ value: v, name: n }));

      currentOptions['multi_process_auto_dial'] = account.multi_process_auto_dial;
      options['multi_process_auto_dial'] = Object.entries(ACCOUNT.MULTI_PROCESS_AUTO_DIAL).map(([v, n]) => ({ value: v, name: n }));

      currentOptions['is_in_testbed'] = accountInfo?.is_in_testbed ?? ACCOUNT_INFO.DEFAULTS.IS_IN_TESTBED;
      options['is_in_testbed'] = ACCOUNT_INFO.IS_IN_TESTBED_OPTIONS;

      currentOptions['hopper_custom_field_order'] = accountInfo?.hopper_custom_field_order ?? ACCOUNT_INFO.DEFAULTS.HOPPER_CUSTOM_ORDER;
      options['hopper_custom_field_order'] = ACCOUNT_INFO.HOPPER_CUSTOM_FIELD_ORDER_OPTIONS;

      currentOptions['sale_rep_id'] = accountInfo?.sale_rep_id ?? null;
      currentOptions['backup_sale_rep_id'] = accountInfo?.backup_sale_rep_id ?? null;
      currentOptions['csm_rep_id'] = accountInfo?.csm_rep_id ?? null;
      currentOptions['backup_csm_rep_id'] = accountInfo?.backup_csm_rep_id ?? null;
      currentOptions['voso_ai_csm_id'] = accountInfo?.voso_ai_csm_id ?? 0;
      currentOptions['client_tier'] = accountInfo?.client_tier ?? null;
      currentOptions['disclaimer'] = accountInfo?.disclaimer ?? '';
      currentOptions['talkdesk_id'] = accountInfo?.talkdesk_id ?? '';
      currentOptions['preserve_log_expire_at'] = accountInfo?.preserve_log_expire_at
        ? new Date(accountInfo.preserve_log_expire_at).toISOString().replace('T', ' ').substring(0, 19)
        : '';

      currentOptions['show_tos_on_agent_app'] = accountInfo?.show_tos_on_agent_app ?? ACCOUNT_INFO.DEFAULTS.SHOW_TOS_ON_AGENT_APP;
      options['show_tos_on_agent_app'] = ACCOUNT_INFO.SHOW_TOS_ON_AGENT_APP_OPTIONS;

      // ── voip_provider ─────────────────────────────────────────────────────────
      let providerEnv: string;
      if (Number(account.trr_system) == 5) {
        providerEnv = 'CYNERIC';
      } else {
        providerEnv = account.voip_provider_env ?? 'TRR_BETA';
      }
      currentOptions['voip_provider'] = ACCOUNT.VOIP_PROVIDER[providerEnv] ?? providerEnv;

      // ── members list ─────────────────────────────────────────────────────────
      const membersRaw: any[] = await this.jocMainDatabaseService.members.findMany({
        select: { id: true, username: true, first_name: true, last_name: true, email: true },
      });
      options['members'] = membersRaw.map((m: any) => ({
        value: Number(m.id),
        text: m.username ? m.username : m.email,
      }));

      // ── account direct fields (FIEL_TYPE_1 = model choices) ──────────────────
      const fieldOptionMap: Record<string, { optionKey: string; choices: any[] }> = {
        default_gmt: { optionKey: 'default_gmt', choices: Object.entries(ACCOUNT.DEFAULT_GMT).map(([v, n]) => ({ value: v, name: n })) },
        billing_production: { optionKey: 'billing_production', choices: Object.entries(ACCOUNT.BILLING_PRODUCTION).map(([v, n]) => ({ value: v, name: n })) },
        test_account: { optionKey: 'test_account', choices: Object.entries(ACCOUNT.TEST_ACCOUNT).map(([v, n]) => ({ value: v, name: n })) },
        status: { optionKey: 'status', choices: Object.entries(ACCOUNT.FULL_STATUS_OPTIONS).map(([v, n]) => ({ value: v, name: n })) },
        security_compliance: { optionKey: 'security_compliance', choices: Object.entries(ACCOUNT.SECURITY_COMPLIANCE).map(([v, n]) => ({ value: v, name: n })) },
        extend_delinquent_period: { optionKey: 'extend_delinquent_period', choices: Object.entries(ACCOUNT.EXTEND_DELINQUENT_PERIOD).map(([v, n]) => ({ value: v, name: n })) },
        default_audio_format: { optionKey: 'default_audio_format', choices: Object.entries(ACCOUNT.DEFAULT_AUDIO_FORMAT).map(([v, n]) => ({ value: v, name: n })) },
        migration_mode: { optionKey: 'migration_mode', choices: Object.entries(ACCOUNT.MIGRATION_MODE).map(([v, n]) => ({ value: v, name: n })) },
        externally_managed_account: { optionKey: 'externally_managed_account', choices: Object.entries(ACCOUNT.EXTERNALLY_MANAGED_ACCOUNT).map(([v, n]) => ({ value: v, name: n })) },
      };

      // Populate both options and currentOptions for each account field
      for (const field of ACCOUNT_INFO.UPDATABLE_FIELDS) {
        const val = account[field];
        if (val instanceof Date) {
          currentOptions[field] = val.toISOString().substring(0, 10);
        } else {
          currentOptions[field] = val !== undefined && val !== null ? String(val) : '';
        }
        if (fieldOptionMap[field]) {
          options[field] = fieldOptionMap[field].choices;
        }
      }

      // ── extend_delinquent_period grace options (separate GraceOptions key) ──
      const grace = Object.entries(ACCOUNT.EXTEND_DELINQUENT_PERIOD).map(([v, n]) => ({ value: v, name: n }));

      // ── json_settings derived fields ─────────────────────────────────────────
      currentOptions['enable_overlay_matching'] = jsonSettingsArr['enable_overlay_matching'] ?? 'N';
      options['enable_overlay_matching'] = ACCOUNT_INFO.ENABLE_OVERLAY_MATCHING_OPTIONS;

      currentOptions['enable_contact_email_validation'] = jsonSettingsArr['enable_contact_email_validation'] ?? ACCOUNT_INFO.DEFAULTS.CONTACT_EMAIL_VALIDATION;
      options['enable_contact_email_validation'] = ACCOUNT_INFO.ENABLE_CONTACT_EMAIL_VALIDATION_OPTIONS;

      currentOptions['enable_multi_factored_authentication'] = jsonSettingsArr['enable_multi_factored_authentication'] ?? ACCOUNT_INFO.DEFAULTS.MULTI_FACTORED_AUTHENTICATION;
      options['enable_multi_factored_authentication'] = ACCOUNT_INFO.ENABLE_MULTI_FACTORED_AUTHENTICATION_OPTIONS;

      currentOptions['attestation_level'] = jsonSettingsArr['attestation_level'] ?? ACCOUNT_INFO.DEFAULTS.ATTESTATION_LEVEL;
      options['attestation_level'] = ACCOUNT_INFO.ATTESTATION_LEVEL_OPTIONS;

      // enable_sms_testing (stored as enable_sms_voip boolean in dev_settings)
      const smsTesting = jsonSettingsArr['dev_settings']?.['enable_sms_voip'] ?? false;
      currentOptions['enable_sms_testing'] = smsTesting ? 'Y' : 'N';
      options['enable_sms_testing'] = ACCOUNT_INFO.ENABLE_SMS_TESTING_OPTIONS;

      const debounce = jsonSettingsArr['dev_settings']?.['enable_debounce_sms'] ?? null;
      currentOptions['enable_debounce_sms'] = debounce || 'Y';
      options['enable_debounce_sms'] = ACCOUNT_INFO.ENABLE_DEBOUNCE_SMS_OPTIONS;

      const ivaReact = jsonSettingsArr['dev_settings']?.['enable_iva_react_ui'] ?? false;
      currentOptions['enable_iva_react_ui'] = ivaReact ? 'Y' : 'N';
      options['enable_iva_react_ui'] = ACCOUNT_INFO.ENABLE_IVA_REACT_UI_OPTIONS;

      // country options (from ACCOUNT.COUNTRY)
      options['country'] = ACCOUNT.COUNTRY.map((c: any) => ({ name: c.name, value: c.value }));

      // enable_camp_reg_staging
      currentOptions['enable_camp_reg_staging'] = jsonSettingsArr['enable_camp_reg_staging'] || 'N';
      options['enable_camp_reg_staging'] = ACCOUNT_INFO.ENABLE_CAMP_REG_STAGING_OPTIONS;

      // show_staging logic
      const brandId = jsonSettingsArr['campaign_registry_settings']?.['brandId'];
      const brandIdStaging = jsonSettingsArr['campaign_registry_settings']?.['brandId_staging'];
      const testAcct = currentOptions['test_account'];
      currentOptions['show_staging'] =
        (['Y', 'A'].includes(testAcct) && !brandId) ||
        (['Y', 'A'].includes(testAcct) && brandId && brandIdStaging === 'Y');

      // enable_dedicated_sms
      currentOptions['enable_dedicated_sms'] = jsonSettingsArr['enable_dedicated_sms'] || 'N';
      options['enable_dedicated_sms'] = ACCOUNT_INFO.ENABLE_DEDICATED_SMS_OPTIONS;

      // Password Rotation
      currentOptions['enable_password_rotation'] = jsonSettingsArr['enable_password_rotation'] ?? ACCOUNT_INFO.DEFAULTS.PASSWORD_ROTATION;
      options['enable_password_rotation'] = ACCOUNT_INFO.ENABLE_PASSWORD_ROTATION_OPTIONS;

      // sms_inbound_redirect
      currentOptions['sms_inbound_redirect'] = jsonSettingsArr['dev_settings']?.['sms_inbound_redirect'] || '';

      // monthly_account_value_mmr
      currentOptions['monthly_account_value_mmr'] = '$' + (jsonSettingsArr['monthly_account_value_mmr'] || 0);

      // total_call_recording_storage (from local joc db)
      const recordingStat: any = await this.jocDataBaseService.$queryRawUnsafe(
        `SELECT size FROM recording_storage_stats WHERE account_id = ? ORDER BY created_at DESC LIMIT 1`,
        accountId,
      );
      let totalStorage = 'N/A';
      const rawSize = recordingStat?.[0]?.size;
      if (rawSize) {
        totalStorage = (Number(rawSize) / Math.pow(1024, 4)).toFixed(2) + ' TB';
      }
      currentOptions['total_call_recording_storage'] = totalStorage;

      // auto_pro_did_limit
      currentOptions['auto_pro_did_limit'] = jsonSettingsArr['auto_pro_did_limit'] ?? 100;

      // demo_expired_at (only for DEMO/ACTIVE_DEMO accounts)
      const credentialOptions: Record<string, any> = {
        Options: options,
        CurrentOptions: currentOptions,
        GraceOptions: grace,
      };

      if (account.status === 'DEMO' || account.status === 'ACTIVE_DEMO') {
        credentialOptions['CurrentOptions']['demo_expired_at'] = account.demo_expired_at
          ? new Date(account.demo_expired_at).toISOString().substring(0, 10)
          : null;
      }

      return credentialOptions;
    } catch (error) {
      throw new Error(error);
    }
  }

  async paginate(model: any, where: any, orderBy: any, page: number, limit: number): Promise<any> {
    const offset = limit * (page - 1);
    const [data, total] = await Promise.all([
      model.findMany({ where, orderBy, skip: offset, take: limit }),
      model.count({ where }),
    ]);
    return {
      data,
      total,
      current_page: page,
      per_page: limit,
      last_page: Math.ceil(total / limit),
    };
  }

  async getNotesByPage(current_page: number = 1, account_id: number, limit: number = 10): Promise<any> {
    const query = {
      where: { account_id, deleted_at: null },
      orderBy: { created_at: 'desc' },
    };
    const paginator = await this.paginate(this.jocDataBaseService.account_notes, query.where, query.orderBy, current_page, limit);
    return paginator;
  }

  async accountNotesGetAction(uId: string, page: number = 1, userId?: number): Promise<any> {
    const result:Record<string, any> = {
        success: false,
        code:200
    }

    const account = await this.jocDataBaseService.accounts.findFirst({ where: { u_id: uId } });

    if (account) {
      const limit = 10; // RESULTS_PER_PAGE

      const paginator = await this.getNotesByPage(page, account.id, limit);

      const accountNotes = paginator.data;

      const max_pages = paginator.last_page;

      if (accountNotes.length > 0) {
        const notes: Record<string, any>[] = [];
        for (const oneNote of accountNotes) {
          const member = await this.jocMainDatabaseService.members.findFirst({ where: { id: oneNote.member_id } });
          const note_format: Record<string, any> = {};

          note_format['account_id'] = oneNote.account_id;
          note_format['member_id'] = oneNote.member_id;
          note_format['subject'] = oneNote.subject;
          note_format['note'] = oneNote.note;
          note_format['created_at'] = oneNote.created_at ? oneNote.created_at.toISOString().slice(0, 19).replace('T', ' ') : null;

          if (member && member.first_name && member.last_name) {
            note_format['member_name'] = member.first_name + ' ' + member.last_name;
          } else {
            note_format['member_name'] = 'Unknown';
          }

          notes.push(note_format);
        }

        result.notes = notes;
        result.max_pages = max_pages;
        result.success = true;
      } else {
        result.success = true;
        result.notes = [];
      }
    } else {
      result['error'] = 'ERROR: Unable to find the account.';
    }

    return result;
  }

  async accountNotesPostAction(uId: string, createNotesDto: CreateNotesDto, userId?: number): Promise<any> {
    const result: Record<string, any> = {
        success: false,
        code: 200
    };

    const account = await this.jocDataBaseService.accounts.findFirst({ where: { u_id: uId } });

    if (account) {
      const newNote = {
        u_id: uId,
        account_id: account.id,
        subject: createNotesDto.parameters.subject,
        note: createNotesDto.parameters.body,
        member_id: userId || 9999999,
      };

      //creating notes
      await this.jocDataBaseService.account_notes.create({ data: newNote });

      result.success = true;
    } else {
      result['error'] = 'ERROR: Unable to find the account.';
    }

    return result;
  }

  // ─── GET/PUT: users action (manage users and remote session) ──────────────────
  async getFilteredUsersByAccountId(accountId: number, clusterNode: string): Promise<Record<number, any>> {
    try {
      // Build dynamic cluster connection name
      const clusterDb = `cluster_${clusterNode}`;

      // Query the cluster-specific database for users with ACL and connection_type
      // This would need to be handled with a dynamic Prisma client or raw query
      // For now, we'll use a placeholder that assumes a cluster database service
      const results: any = await this.asteriskDatabaseService.$queryRawUnsafe(
        `SELECT user_id, connection_type, acl_access_profile FROM users WHERE account_id = ? ORDER BY user_id`,
        accountId,
      );

      const returnObj: Record<number, any> = {};
      for (const result of results) {
        returnObj[result.user_id] = {
          acl_access_profile: result.acl_access_profile,
          connection_type: result.connection_type,
        };
      }

      return returnObj;
    } catch (error) {
      throw new Error(error);
    }
  }


  async getRegistrationServerByCluster(clusterId: string | string[], type: string = 'REGULAR', close: number = 0): Promise<any[]> {
    try {
      let sql = `
        SELECT i.ip, s.cluster, s.close 
        FROM servers s 
        LEFT JOIN servers_ips i ON s.id = i.servers_id 
        LEFT JOIN servers_properties p ON s.id = p.servers_id 
        WHERE p.value = 'reg' AND s.type = ?
      `;

      const params: any[] = [type];

      if ([0, 1].includes(close)) {
        sql += ` AND s.close = ?`;
        params.push(close);
      }

      if (Array.isArray(clusterId)) {
        sql += ` AND s.cluster IN (${clusterId.map(() => '?').join(',')})`;
        params.push(...clusterId);
      } else {
        sql += ` AND s.cluster = ?`;
        params.push(clusterId);
      }

      const results: any = await this.jocMainDatabaseService.$queryRawUnsafe(sql, ...params);
      return results || [];
    } catch (error) {
      console.error('Error fetching registration servers:', error);
      return [];
    }
  }

  async usersGetAction(uId: string, userId?: number): Promise<any> {
    try {
      const data = {
        success: false,
        code: 404,
        text: 'Account not found!',
      };

      const account = await this.jocDataBaseService.accounts.findFirst({ where: { u_id: uId } });

      if (!account) {
        return data;
      }
      const accountId = account.id;
      const memberId = userId || 999999;

      // Fetch all users for the account
      const users = await this.jocDataBaseService.users.findMany({
        where: {
          account_id: accountId,
        },
        select: {
          id: true,
          u_id: true,
          account_id: true,
          email: true,
          salt: true,
          algo: true,
          password: true,
          first_name: true,
          last_name: true,
          title: true,
          contact_email: true,
          email_verification_key: true,
          created_at: true,
          remote_session: true,
          log_debug_level: true,
          deleted_at: true,
          registration_server: true,
        },
      });

      let theUsers = users.map(u => ({
        id: u.id,
        u_id: u.u_id,
        account_id: u.account_id,
        email: u.email,
        salt: u.salt,
        algo: u.algo,
        password: u.password,
        first_name: u.first_name,
        last_name: u.last_name,
        title: u.title,
        contact_email: u.contact_email,
        email_verification_key: u.email_verification_key,
        created_at: this.commonService.formatDateForResponse(u.created_at as Date),
        registration_server: u.registration_server,
        remote_session: u.remote_session,
        log_debug_level: u.log_debug_level,
      }));

      // If account has cluster node, get extended info from cluster database
      if (account.cluster_node !== '' && account.cluster_node !== null) {
        const omniUsers = await this.getFilteredUsersByAccountId(accountId, String(account.cluster_node));

        theUsers = theUsers.map((user: any) => {
          // Generate encrypted credentials
          user._username = this.utility.encrypted(
            `${user.account_id}_${user.id}`, safesoft_encrypt_decrypt_key
          ) + '--imper';
          user._password = this.utility.encrypted(
            `${memberId}_${Math.floor(Date.now() / 1000) - 10}`, safesoft_encrypt_decrypt_key
          );

          // Set ACL defaults
          user.acl = 'N/A';

          // Check if user exists in cluster omniUsers
          if (omniUsers[user.id]) {
            user.acl = 'Custom';
            user.connection_type = '';
            if (USER.acl_access_profile_options[omniUsers[user.id].acl_access_profile]) {
              user.acl = USER.acl_access_profile_options[omniUsers[user.id].acl_access_profile];
            }
            if (omniUsers[user.id].connection_type) {
              user.connection_type = omniUsers[user.id].connection_type;
            }
          }

          return user;
        });
      }

      // Add options to all users
      theUsers = theUsers.map((user: any) => {
        return {
          remote_session_options: USER.REMOTE_SESSION_OPTIONS,
          log_debug_level_options: USER.LOG_DEBUG_LEVEL_OPTIONS,
          ...user,
        };
      });

      // Build recording options
      const recordingOptions: Record<string, any> = {};
      for (let i = 1; i < 8; i++) {
        recordingOptions['remote_session_expired_at'] = recordingOptions['remote_session_expired_at'] || [];
        recordingOptions['remote_session_expired_at'].push({ value: `${i}`, name: `${i} Days` });
      }
      recordingOptions['remote_session_options'] = [
        { value: 'NO', name: 'No' },
        { value: 'YES', name: 'Yes' }
      ];

      // Fetch registration servers
      const registrationServers = await this.getRegistrationServerByCluster(
        account.cluster_node || '',
      );

      // Count active remote session users
      const remoteUsers: any[] = [];
      const usersCount: any[] = [];
      for (const user of users) {
        if (user.deleted_at === null) {
          usersCount.push('x');
        }
        if (user.remote_session === 'YES' && user.deleted_at === null) {
          remoteUsers.push('yes');
        }
      }
      if (usersCount.length === remoteUsers.length) {
        recordingOptions['remote_account'] = true;
      }

      return {
        success: true,
        code: 200,
        data: theUsers,
        recordingOptions,
        data_center: account.primary_data_center ? account.primary_data_center.toLowerCase() : 'dt',
        registration_servers: registrationServers,

      };
    } catch (error) {
      throw new Error(error);
    }
  }

  async usersPostAction(u_id: string, updateUserDto: UpdateUserDto, userId?: string): Promise<any> {
    try {
      const account = await this.jocDataBaseService.accounts.findFirst({ where: { u_id: u_id } });

      const data = {
        success: false,
        code: 404,
        text: 'Account not found!',
      };

      if (account) {
        const accountId = account.id;
        let remoteSession = ACCOUNT.FLAGS.FLAG_YES_FULL;
        if (updateUserDto.currentOptions && updateUserDto.currentOptions.remote_session !== undefined) {
          remoteSession = updateUserDto.currentOptions.remote_session;
        }

        await this.jocDataBaseService.users.updateMany({
          where: {
            account_id: accountId,
            deleted_at: null,
          },
          data: {
            remote_session: remoteSession as any,
            remote_session_expired_at: null,
          },
        });

        const recording = (remoteSession === ACCOUNT.FLAGS.FLAG_YES_FULL) ? ACCOUNT.STRINGS.ACTIVE : ACCOUNT.STRINGS.INACTIVE;
        data.success = true;
        data.code = 200;
        data.text = `All users on account ${accountId} have session recording ${recording}`;
      }
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  // API is done but need to check as this is calling projectXApiRequest 
  //placeholder
  async moveUserAction(u_id: string, moveUserDto: MoveUserDto): Promise<any> {
    try {
      const params: Record<string, any> = {
        user_id: '',
        server_ip: '',
        account_id: '',
        cluster: '',
        emergency: 0,
        location: '',
        hostname: '',
      };

      const account: any = await this.jocDataBaseService.accounts.findFirst({
        where: { u_id },
        select: {
          id: true,
          cluster_node: true,
          primary_data_center: true,
        },
      });

      if (account) {
        params.account_id = account.id;
        params.cluster = account.cluster_node;
        params.location = account.primary_data_center;
      }

      if (moveUserDto && typeof moveUserDto === 'object') {
        if (moveUserDto.user_id !== undefined) {
          params.user_id = moveUserDto.user_id;
        }
        if (moveUserDto.server_ip !== undefined) {
          params.server_ip = moveUserDto.server_ip;
        }
        if (moveUserDto.emergency !== undefined) {
          params.emergency = moveUserDto.emergency;
        }
      }

      let data: Record<string, any>;

      if (!params.account_id) {
        data = {
          success: false,
          code: 404,
          text: 'Account not found!',
        };
      } else if (!params.user_id || !params.server_ip) {
        data = {
          success: false,
          code: 422,
          text: 'Post data missing!',
        };
      } else {
        params.hostname = '';
        if (params.emergency === 0) {
          const theServerIp: any = await this.jocMainDatabaseService.servers_ips.findFirst({
            where: { ip: params.server_ip },
            select: { servers_id: true },
          });
          if (theServerIp) {
            const server: any = await this.jocMainDatabaseService.servers.findFirst({
              where: { id: theServerIp.server_id },
              select: { hostname: true },
            });
            if (server) {
              params.hostname = server.hostname;
            }
          }
        }

        data = {
          success: false,
          code: 422,
          text: 'Something went wrong in Omni API!',
        };

        //placeholder for now as this is calling projectXApiRequest
        const response: any = await this.projectXApi.projectXApiRequest('move-voicemail', params, 'POST');
        if (response) {
          if (response.code !== undefined) {
            if (response.code === 200) {
              const jocUser: any = await this.jocDataBaseService.users.findFirst({
                where: {
                  account_id: params.account_id,
                  id: Number(params.user_id),
                },
              });
              if (jocUser) {
                await this.jocDataBaseService.users.update({
                  where: { id: Number(params.user_id) },
                  data: { registration_server: params.server_ip },
                });
              }
            }
            data = response;
          }
        }
      }

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async transactionAction(u_id: string, transactionDto: GetTransactionLogsDto): Promise<any> {
    try {
      const accounts = await this.jocDataBaseService.accounts.findFirst({
        where: { u_id },
        select: { id: true },
      });
      const provider_name = providers_array
      if (!accounts) {
        return {
          success: false,
          code: 404,
          text: 'Account not found!',
          data: []
        };
      } else {
        const page = transactionDto.page;
        const total = await this.jocDataBaseService.transaction_logs.findMany({
          where: { account_id: accounts.id },
          orderBy: { created_at: 'desc' },
        });
        const total_found = total.length;

        const logsData = await this.jocDataBaseService.transaction_logs.findMany({
          where: { account_id: accounts.id },
          orderBy: { created_at: 'desc' },
          take: 20,
          skip: page
        });
        for (const log of logsData) {
          log.new_balance = Number(log.new_balance);
          log.amount_charged = Number(log.amount_charged);
          log.current_balance = Number(log.current_balance);
        }
        const pages = await this.commonService.getPaginationLinks(total_found, (page / 20));
        return {
          success: true,
          code: 200,
          data: logsData,
          pages: pages,
          total_found: total_found,
          provider_name: provider_name
        }
      }

    } catch (error) {
      throw new Error(error);
    }
  }


}

