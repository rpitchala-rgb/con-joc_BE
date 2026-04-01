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

@Injectable()
export class UserService {

  constructor(private readonly jocDataBaseService: JocDatabaseService,
    private readonly commonService: CommonService,
    private readonly usersUtility: UsersUtility
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
          _username:
            this.usersUtility.encrypted(
              `${user.account_id}_${user.id}`,
              safesoft_encrypt_decrypt_key,
            ) + '--imper',
          _password: this.usersUtility.encrypted(
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

}
