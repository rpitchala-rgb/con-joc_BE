import { Injectable } from '@nestjs/common';
import { JocMainDatabaseService } from '../../shared/joc-database/joc-main-database.service';
import { JocDatabaseService } from '../../shared/joc-database/joc-database.service';
import { SearchMemberLogDto } from './dto/search-member-log.dto';
import { CommonService } from '../../shared/common/common.service';
import { MemberLogUtility } from './member-log.utility';
import { MEMBER_LOG } from './member-log-constants/member-log.constants';
import { MemberLogOptionsDto } from './dto/member-log-options.dto';

@Injectable()
export class MemberLogService {
  constructor(
    private readonly jocDatabaseService: JocDatabaseService,
    private readonly jocMainDatabaseService: JocMainDatabaseService,
    private readonly commonService: CommonService,
    private readonly memberLogUtility: MemberLogUtility,
  ) { }

  async searchMemberLogs(dto: SearchMemberLogDto): Promise<any> {
    if(!dto) {
      throw "Post Data Missing!";
    }
    const {
      orderOptions,
      selectOptions,
      orderOptionsValue,
      selectOptionsValue,
      page,
      limit,
    } = dto;
    const searchCriteria: Record<string, any[]> = {};
    // Build search criteria
    selectOptions.forEach((value, key) => {
      if (selectOptionsValue[key]) {
        if (!searchCriteria[value]) {
          searchCriteria[value] = [];
        }

        if (Array.isArray(selectOptionsValue[key])) {
          selectOptionsValue[key].forEach((val) => {
            searchCriteria[value].push(val);
          });
        } else {
          searchCriteria[value].push(selectOptionsValue[key]);
        }
      }
    });

    const currentPage = page || 0;

    const orderCriteria = {
      [orderOptions]: orderOptionsValue,
    };

    // Fetch data
    const memberLogs = await this.getFilteredMemberLogs(
      limit,
      currentPage,
      searchCriteria,
      orderCriteria,
    );
    // Fetch count
    const memberLogsCount = await this.getMemberLogsCount(
      searchCriteria,
      orderCriteria,
    );

    let results = this.commonService.convertBigIntToJSON(memberLogs);

    for (let member_log of results) {
      let parsedData = this.memberLogUtility.normalizeMemberLogPayload(
        JSON.parse(member_log['data'] || '{}'),
      );

      if (member_log['section'] === 'JOC Member') {
        if (parsedData['password']) {
          parsedData['password'] = '*****';
        }

        member_log['data'] = JSON.stringify(parsedData);
      }

      member_log['data'] = this.memberLogUtility.normalizeMemberLogPayload(
        JSON.parse(member_log['data'] || '{}'),
      );
      member_log['original_data'] =
        this.memberLogUtility.normalizeMemberLogPayload(
          JSON.parse(member_log['original_data'] || '{}'),
        );

      if (
        typeof member_log['data'] === 'object' ||
        Array.isArray(member_log['data'])
      ) {
        member_log['data'] = JSON.stringify(member_log['data']);
      }

      if (
        typeof member_log['original_data'] === 'object' ||
        Array.isArray(member_log['original_data'])
      ) {
        member_log['original_data'] = JSON.stringify(
          member_log['original_data'],
        );
      }

      member_log['data'] = this.memberLogUtility.htmlDiff(
        member_log['original_data'],
        member_log['data'],
      );
      // Fetch modified_by details
      const modifiedBy = await this.getModifiedByMember(
        member_log['member_id'],
      );

      if (!modifiedBy?.username) {
        member_log['modified_by'] = `${modifiedBy?.email} (${modifiedBy?.id})`;
      } else {
        member_log['modified_by'] = `${modifiedBy.username} (${modifiedBy.id})`;
      }
    }

    if (!results) {
      results = [];
    }

    results = results.map((member_log: any) => ({
      action_options: MEMBER_LOG.action_options,
      ...member_log,
    }));

    const pages = this.commonService.getPaginationLinks(memberLogsCount, limit);
    const fileInfo = {
      pages,
      found: memberLogsCount,
      results: results,
    };

    return {
      data: fileInfo,
    };
  }

  async getFilteredMemberLogs(
    limit: number,
    offset: number,
    search_criteria: Record<string, any[]>,
    order_criteria: Record<string, string>,
  ) {
    const conditions: string[] = [];
    if (Object.keys(search_criteria).length > 0) {
      for (const key in search_criteria) {
        const val = search_criteria[key];
        const searchOptions = val.join("','");
        conditions.push(`m.${key} IN ('${searchOptions}')`);
      }
    }
    let order = '';
    if (Object.keys(order_criteria).length > 0) {
      for (const key in order_criteria) {
        order = ` ORDER BY m.${key} ${order_criteria[key]}`;
      }
    }
    let sql = ` SELECT * FROM member_log m WHERE 1=1 `;
    for (const condition of conditions) {
      sql += ` AND ${condition}`;
    }
    if (order) {
      sql += order;
    }
    sql += ` LIMIT ${limit} OFFSET ${offset}`;
    const filteredMemberLogs = await this.jocMainDatabaseService.$queryRawUnsafe(sql);
    return filteredMemberLogs;
  }

  async getMemberLogsCount(
    search_criteria: Record<string, any[]>,
    order_criteria: Record<string, string>,
  ) {
    const conditions: string[] = [];
    if (Object.keys(search_criteria).length > 0) {
      for (const key in search_criteria) {
        const val = search_criteria[key];
        const searchOptions = val.join("','");
        conditions.push(`m.${key} IN ('${searchOptions}')`);
      }
    }
    let order = '';
    if (Object.keys(order_criteria).length > 0) {
      for (const key in order_criteria) {
        order = ` ORDER BY m.${key} ${order_criteria[key]}`;
      }
    }
    let sql = ` SELECT COUNT(*) as count FROM member_log m WHERE 1=1 `;
    for (const condition of conditions) {
      sql += ` AND ${condition}`;
    }
    if (order) {
      sql += order;
    }
    const result: any = await this.jocMainDatabaseService.$queryRawUnsafe(sql);
    return Number(result[0]?.count || 0);
  }

  async getMemberLogsOptions(dto: MemberLogOptionsDto): Promise<any> {
    const { u_id } = dto;
    const isAll = u_id === 'all';

    // Build filters based on u_id
    const filters: Record<string, any> = {
      sub_section: { ...MEMBER_LOG.filters_base.sub_section, options: [] },
    };

    if (isAll) {
      filters['section']   = { ...MEMBER_LOG.filters_base.section,   options: [] };
      filters['member_id'] = { ...MEMBER_LOG.filters_base.member_id, options: [] };
    }

    // Resolve sub_section options: find the section of the first log altered by u_id,
    // then get the acl path names scoped to that section's child rules.
    const sectionNames: string[] = [];
    if (!isAll) {
      const aLog: any = await this.jocMainDatabaseService.member_log.findMany({
        where:{
          altered: u_id,
        },
        select:{
          section: true,
        },        
        take: 1,
      });
      const section = aLog?.[0]?.section ?? null;
      if (section) {
        const parent = await this.jocMainDatabaseService.member_acl_rules.findMany({
          where:{
            parent_id: 0,
            name: section,
          },
          select:{
            id: true,
          },
          take: 1,
        });
        if (parent?.[0]?.id) {
          const childRules: any = await this.jocMainDatabaseService.member_acl_rules.findMany({
            where:{
              parent_id: parent[0].id
            },
            select:{
              section_name: true,
            },
          });
          childRules.forEach((r: any) => {
            if (r.section_name) sectionNames.push(r.section_name);
          });
        }
      }
    }

    // sub_section options — getAclPathNames equivalent
    filters['sub_section']['options'] = await this.getAclPathNames(sectionNames);

    if (isAll) {
      // section options — getAclRuleNames equivalent
      filters['section']['options'] = await this.getAclRuleNames();

      // member_id options — getMemberNames equivalent
      filters['member_id']['options'] = await this.getMemberNames();
    }

    // Build filterByList
    const filterByList: any[] = [
      MEMBER_LOG.filterByList.ip_address,
    ];
    if (isAll) {
      filterByList.push(MEMBER_LOG.filterByList.section);
    }
    filterByList.push(MEMBER_LOG.filterByList.sub_section);
    filterByList.push(MEMBER_LOG.filterByList.account_id);
    filterByList.push(MEMBER_LOG.filterByList.member_id);

    // Build orderByList
    const orderByList: any[] = [
      MEMBER_LOG.orderByList.created_at,
      MEMBER_LOG.orderByList.ip_address,
      MEMBER_LOG.orderByList.sub_section,
      MEMBER_LOG.orderByList.account_id,
    ];
    if (isAll) {
      orderByList.push(MEMBER_LOG.orderByList.section);
    }

    const options = {
      filterByList,
      orderByList,
    };

    return {
      data: options,
      filters,
    };
  }

//whenever the memberRepository is ready move this function there and then make use of it here.
  async getMemberNames(): Promise<any> {
    const results = await this.jocMainDatabaseService.members.findMany({
      distinct: ['username', 'id', 'first_name', 'last_name', 'email'],
      select:{
        username: true,
        id: true,
        first_name: true,
        last_name: true,
        email: true,
      }
    });
    return results.map((r)=>({
      value: Number(r.id),
      text: r.username ? r.username : r.email,
    }))
  }

  //whenever the memberAclRuleRepository is ready move this function there and then make use of it here
  async getAclRuleNames(): Promise<any> {
    const results = await this.jocMainDatabaseService.member_acl_rules.findMany({
      where:{
        parent_id: 0,
      },
      distinct: ['name'],
      select:{
        name: true,
      }
    });
    return results.map((r)=>({
      value:r.name,
      text:r.name,

    }))
  }

  //whenever the memberAclpathRepository is ready move this function there and then make use of it here.
  async getAclPathNames(sectionNames: string[]): Promise<any> {
    let results: any[];
    if (sectionNames.length > 0) {
      results = await this.jocMainDatabaseService.member_acl_paths.findMany({
        where:{
          section_name: { in: sectionNames }
        },
        distinct:['name'],
        select:{
          name: true,
        }
      })
    } else {
      results = await this.jocMainDatabaseService.member_acl_paths.findMany({
        distinct:['name'],
        select:{
          name: true,
        }
      });
    }
    return results.map((r) => ({ value: r.name, text: r.name }));
  }

  async getModifiedByMember(memberId: number): Promise<any> {   
    const numericMemberId = Number(memberId);
    if (!numericMemberId) {
      return null;
    }
    try {
      const rows: any = await this.jocMainDatabaseService.members.findMany({
        where: { id: numericMemberId },
        take: 1,
      });
      return (
        rows?.[0] || {
          id: numericMemberId,
          username: null,
          email: null,
        }
      );
    } catch (error) {
      return {
        id: numericMemberId,
        username: null,
        email: null,
      };
    }
  }
}
