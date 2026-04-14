import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JocDatabaseService } from '../../shared/joc-database/joc-database.service';
import { SearchUserDto } from './dto/search-user.dto';
import { CommonService } from '../../shared/common/common.service';
import { clusterServer } from '../../shared/constants/constants';
import { safesoft_encrypt_decrypt_key } from '../../shared/constants/constants';
import { USER } from './user-constants/user-constant';
import { UsersUtility } from './users.utility';
import { Utility } from '../../shared/utility/utility';
import { ENTITY_CONSTANT } from '../accounts/account-constants/account.constant';
import { UpdateCredentialDto } from './dto/update-credential.dto';

@Injectable()
export class UserService {
  accountUtility: any;

  constructor(private readonly jocDataBaseService: JocDatabaseService,
    private readonly commonService: CommonService,
    private readonly utility: Utility
  ) { }

  async getFilteredUsers(dto: SearchUserDto): Promise<any> {
    try {
      const page = dto.page ?? 0;
      const inputValue = dto.inputValue ?? '';
      const limit = dto.limit ?? 20;

      const offset = page;
      const member_id = 999999;

      let usersQuery = ` SELECT 
    u.id,
    u.u_id,
    u.account_id,
    u.email,
    u.salt,
    u.algo,
    u.password,
    u.first_name,
    u.last_name,
    u.title,
    u.contact_email,
    u.email_verification_key,
    u.created_at,
    u.registration_server,
    u.remote_session,
    u.log_debug_level FROM users u WHERE 1=1 `;

      const params: any[] = [];

      if (inputValue) {
        usersQuery += ` AND ( u.first_name LIKE ? OR u.last_name LIKE ? OR u.email LIKE ? ) `;
        const like = `%${inputValue}%`;
        params.push(like, like, like);
      }

      usersQuery += ` ORDER BY u.id DESC LIMIT ? OFFSET ? `;

      params.push(limit, offset);

      const users: any[] = await this.jocDataBaseService.$queryRawUnsafe(
        usersQuery,
        ...params,
      );

      let countQuery = ` SELECT COUNT(u.id) as total FROM users u WHERE 1=1 `;

      const countParams: any[] = [];

      if (inputValue) {
        countQuery += ` AND ( u.first_name LIKE ? OR u.last_name LIKE ? OR u.email LIKE ? ) `;
        const like = `%${inputValue}%`;
        countParams.push(like, like, like);
      }

      const countResult: any = await this.jocDataBaseService.$queryRawUnsafe(
        countQuery,
        ...countParams,
      );

      const userCount = Number(countResult[0]?.total || 0);

      const account_ids = [
        ...new Set(users.map((u) => u.account_id)),
      ];

      let account_objects: any[] = [];
      if (account_ids.length > 0) {
        account_objects = await this.jocDataBaseService.accounts.findMany({
          where: { id: { in: account_ids } },
          select: {
            id: true,
            u_id: true,
            primary_data_center: true,
            cluster_node: true,
          },
        });
      }

      const clusters: string[] = [];
      const account_uids: any = {};
      const accounts_by_id: any = {};

      for (const acc of account_objects) {
        account_uids[acc.id] = acc.u_id;
        accounts_by_id[acc.id] = acc.primary_data_center;

        const cluster_name = `cluster_${acc.cluster_node}`;

        if (clusterServer.includes(cluster_name)) {
          clusters.push(cluster_name);
        }
      }

      const user_ids: number[] = [];

      const results = users.map((user) => {
        user_ids.push(user.id);

        return {
          ...user,
          created_at: this.commonService.formatDateForResponse(user.created_at),
          _username:
            this.utility.encrypted(
              `${user.account_id}_${user.id}`,
              safesoft_encrypt_decrypt_key,
            ) + '--imper',
          _password: this.utility.encrypted(
            `${member_id}_${Math.floor(Date.now() / 1000) - 10}`,
            safesoft_encrypt_decrypt_key,
          ),
        };
      });

      let acls: Record<number, any> = {};

      if (user_ids.length > 0) {
        for (const cluster of clusters) {
          try {
            const omniUsers = await this.getOmniUsersRaw(
              cluster,
              user_ids,
            );
            acls = { ...acls, ...omniUsers };
          } catch (e) { }// catching this smoothly because raw query failed to execute from getOmniUsersRaw as omni_users table is not there in joc db. we need to modify once clusters are implemented.
        }
      }

      for (const result of results) {
        result['acl'] = 'N/A';

        if (acls[result.id]) {
          result['acl'] = 'Custom';

          if (
            USER.acl_access_profile_options[
            acls[result.id]
            ]
          ) {
            result['acl'] =
              USER.acl_access_profile_options[
              acls[result.id]
              ];
          }
        }
      }

      const finalUsers = results.map((user) => {
        const one_user: any = {
          remote_session_options: USER.REMOTE_SESSION_OPTIONS,
          log_debug_level_options: USER.LOG_DEBUG_LEVEL_OPTIONS,
          ...user
        };

        if (account_uids[user.account_id]) {
          one_user.account_uid = account_uids[user.account_id];
        }

        if (accounts_by_id[user.account_id]) {
          one_user.primary_data_center =
            accounts_by_id[user.account_id].toLowerCase();
        }

        return one_user;
      });

      const pages = this.commonService.getPaginationLinks(userCount, limit);
      return {
        found: userCount,
        results: finalUsers,
        pages
      };

    } catch (error) {
      throw new Error(error);
    }
  }

  async getOmniUsersRaw(cluster: string, user_ids: number[]) {
    // const prisma = this.prisma; 

    const ids = user_ids.join(',');
    const query = ` SELECT id, acl_access_profile FROM omni_user WHERE id IN (${ids}) `;
    const results: any[] = await this.jocDataBaseService.$queryRawUnsafe(query);
    const returnObj = {};
    for (const r of results) {
      returnObj[r.id] = r.acl_access_profile;
    }
    return returnObj;
  }

  async getUserCredential(u_id: string) {
    try {
      const fields = {
        account_id: 'TYPE_2',
        id: 'TYPE_9',
        email: 'TYPE_0',
        title: 'TYPE_0',
        first_name: 'TYPE_0',
        last_name: 'TYPE_0',
        password: 'TYPE_0',
        remote_session: 'TYPE_1',
        log_debug_level: 'TYPE_1',
        talkdesk_user_id: 'TYPE_0',
      };

      let user: any;

      if (u_id === 'new') {
        const lastUser: any = await this.jocDataBaseService.users.findFirst({
          orderBy: { id: 'desc' },
          select: { id: true },
        });

        user = {
          id: (lastUser?.id || 0) + 1,
        };
      } else {
        user = await this.jocDataBaseService.users.findFirst({
          where: { u_id },
        });
      }
      if (!user) {
        throw 'User not found';
      }

      const username = user.first_name;

      const options: any = {};
      const currentOptions: any = {};

      const accounts = await this.jocDataBaseService.accounts.findMany({
        select: { id: true, name: true },
      });

      const account_id_options: any = {};
      accounts.forEach((acc) => {
        account_id_options[acc.id] = acc.name;
      });

      options['remote_session_expired_at'] = [];

      for (let i = 1; i < 8; i++) {
        options['remote_session_expired_at'].push({
          value: `${i}`,
          name: `${i} Days`,
        });
      }
      for (const field in fields) {
        const fieldType = fields[field];

        const fieldName = `${field}_options`;
        let valueArray: any = {};

        if(field === "password") continue;
        // TYPE 1 → STATIC OPTIONS
        if (fieldType === 'TYPE_1') {
          valueArray = USER[fieldName] || {};
        }

        // TYPE 2 → ACCOUNT OPTIONS
        else if (fieldType === 'TYPE_2') {
          valueArray = account_id_options;
        }
        const fieldOptions = Object.entries(valueArray).map(
          ([value, name]) => ({
          value: `${value}`,
          name,
          }),
        );
        if (fieldOptions.length > 0) {
          options[field] = fieldOptions;
        }

        currentOptions[field] = `${user[field] ?? ''}`;
      }

      currentOptions['remote_session_expired_set'] = '2';

      if (user.remote_session_expired_at) {
        currentOptions['remote_session_expired_at'] =
          user.remote_session_expired_at;
      }

      return {
        username: username,
        data:{
        Options: options,
        CurrentOptions: currentOptions,
        },
      };
    } catch (error) {
      throw new Error(error);
    }
  }

    async getCredentialAction(u_id: string): Promise<any> {
    try {

      const user = await this.jocDataBaseService.users.findFirst({
        where: { u_id: u_id }
      });

      if (!user) {
        return { success: false, code: 404, text: 'User not found!' };
      }

      const username = user.first_name;

      const account_id_options: Record<number, string> = {};
      const accounts = await this.jocDataBaseService.accounts.findMany({
        select: {
          id: true,
          name: true,
        },
      });
      for (const account of accounts) {
        account_id_options[account.id] = account.name;
      }

      const options: Record<string, any> = {};
      options['remote_session_expired_at'] = [];
      for (let i = 1; i < 8; i++) {
        options['remote_session_expired_at'].push({ value: `${i}`, name: `${i} Days` });
      }

      const fields: Record<string, string> = {
        account_id: ENTITY_CONSTANT.FIEL_TYPE_2,
        id: ENTITY_CONSTANT.FIEL_TYPE_9,
        email: ENTITY_CONSTANT.FIEL_TYPE_0,
        title: ENTITY_CONSTANT.FIEL_TYPE_0,
        first_name: ENTITY_CONSTANT.FIEL_TYPE_0,
        last_name: ENTITY_CONSTANT.FIEL_TYPE_0,
        password: ENTITY_CONSTANT.FIEL_TYPE_0,
        remote_session: ENTITY_CONSTANT.FIEL_TYPE_1,
        log_debug_level: ENTITY_CONSTANT.FIEL_TYPE_1,
        talkdesk_user_id: ENTITY_CONSTANT.FIEL_TYPE_0,
      };

      // Remove password for interface
      delete fields.password;

      // Loop through fields to build options
      for (const [field, fieldType] of Object.entries(fields)) {
        let valueArray: any = null;
        if (fieldType === ENTITY_CONSTANT.FIEL_TYPE_1) {
          // Model choices
          const fieldName = field + "_options";
          valueArray = USER[fieldName.toUpperCase()];
        } else if (fieldType === ENTITY_CONSTANT.FIEL_TYPE_2) {
          // Controller choices
          const fieldName = field + "_options";
          if (fieldName === 'account_id_options') {
            valueArray = account_id_options;
          }
        }
        if (valueArray) {
          options[field] = [];
          for (const [value, name] of Object.entries(valueArray)) {
            options[field].push({ value: `${value}`, name: name });
          }
        }
      }

      const currentOptions: Record<string, any> = {};
      for (const field of Object.keys(fields)) {
        currentOptions[field] = user[field as keyof typeof user] ?? '';
      }

      currentOptions['remote_session_expired_set'] = '2';
      if (user.remote_session_expired_at instanceof Date) {
        currentOptions['remote_session_expired_at'] = user.remote_session_expired_at.toISOString().split('T')[0];
      }

      const credentialOptions = {
        Options: options,
        CurrentOptions: currentOptions,
      };
      return {
        username,
        credentialOptions
      }


    } catch (error) {
      throw new Error(error);
    }
  }

  async credentialActionPut(u_id: string, updateCredentialDto: UpdateCredentialDto): Promise<any> {
    try {

      const content = updateCredentialDto;
      if (!content) {
        return { success: false, code: 404, text: 'Post data missing!' };
      }

      const options = content.currentOptions;
      if (!options) {
        return { success: false, code: 404, text: 'CurrentOptions missing!' };
      }

      let user: any = null;
      if (u_id !== 'new') {
        user = await this.jocDataBaseService.users.findFirst({
          where: { u_id },
        });
        if (!user) {
          return { success: false, code: 404, text: 'User not found!' };
        }
      }

      const fields: Record<string, string> = {
        account_id: ENTITY_CONSTANT.FIEL_TYPE_2,
        id: ENTITY_CONSTANT.FIEL_TYPE_9,
        email: ENTITY_CONSTANT.FIEL_TYPE_0,
        title: ENTITY_CONSTANT.FIEL_TYPE_0,
        first_name: ENTITY_CONSTANT.FIEL_TYPE_0,
        last_name: ENTITY_CONSTANT.FIEL_TYPE_0,
        password: ENTITY_CONSTANT.FIEL_TYPE_0,
        remote_session: ENTITY_CONSTANT.FIEL_TYPE_1,
        log_debug_level: ENTITY_CONSTANT.FIEL_TYPE_1,
        talkdesk_user_id: ENTITY_CONSTANT.FIEL_TYPE_0,
      };

      if (u_id !== 'new' && !user) {
        return { success: false, code: 404, text: 'User not found!' };
      }

      if (options.email) {
        const check_email = await this.jocDataBaseService.users.findFirst({
          where: { email: options.email },
        });
        if (check_email && check_email.id !== user?.id) {
          return {
            success: false,
            code: 403,
            text: 'User with such email already exists!',
          };
        }
      }

      const account = await this.jocDataBaseService.accounts.findFirst({
        where: { id: options.account_id },
      });
      if (!account) {
        return { success: false, code: 404, text: 'Account not found!' };
      }

      for (const [field, fieldType] of Object.entries(fields)) {
        if (fieldType !== ENTITY_CONSTANT.FIEL_TYPE_9 && options[field] !== undefined) {
          if (field === 'first_name' || field === 'last_name') {
            options[field] = this.accountUtility.sanitizeAlphaNumeric(options[field]);
          }
          if (!user) {
            user = { id: 0 };
          }
          user[field] = options[field];
        }
      }
      let userUpdate: any = null;
      if (u_id === 'new') {
        const lastUser = await this.jocDataBaseService.users.findFirst({
          orderBy: { id: 'desc' },
          select: { id: true },
        });
        const nextId = (lastUser?.id ?? 0) + 1;
        user.id = nextId;
        user.u_id = `new_${nextId}`;
        const createData = {
          id: user.id,
          u_id: user.u_id,
          salt: user.salt ?? '',
          algo: user.algo ?? 'sha256',
          password: user.password ?? '',
          first_name: user.first_name ?? '',
          last_name: user.last_name ?? '',
          title: user.title ?? '',
          contact_email: user.contact_email ?? null,
          email_verification_key: user.email_verification_key ?? null,
          email: user.email ?? '',
          account_id: user.account_id ?? options.account_id ?? 0,
          registration_server: user.registration_server ?? null,
          remote_session: user.remote_session ?? 'NO',
          log_debug_level: user.log_debug_level ?? 0,
          talkdesk_user_id: user.talkdesk_user_id ?? null,
        };
        await this.jocDataBaseService.users.create({ data: createData });
      } else {
        userUpdate = await this.jocDataBaseService.users.update({
          where: { id: user.id },
          data: Object.fromEntries(
            Object.entries(user).filter(([key]) => key !== 'id' && key !== 'u_id'),
          ),
        });
      }

      const params = {
        id: user.id,
        account_id: user.account_id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        cluster: account.cluster_node,
      };

      //placeholder for ProjectX API call to update user in Omni
      /*const response: any = await this.projectXApi.projectXApiRequest('user/update', params, 'POST');

      if (response && response.success !== undefined) {
        if (response.success) {
          data.success = true;
          data.code = response.code ?? 200;
          data.text = response.text ?? 'User updated successfully!';
        } else {
          data.code = response.code ?? 420;
          data.text = response.text ?? 'There was a problem updating the User in Omni';
        }
      } else if (response === false) {
        data.success = false;
        data.code = 502;
        data.text = 'ProjectX API request failed';
      } else {
        data.success = true;
        data.code = 200;
        data.text = 'User updated successfully!';
      }*/

      return { u_id: userUpdate.u_id };
    } catch (error) {
      throw new Error(error);
    }
  }

}
