import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemberLogService } from './member-log.service';
import { SearchMemberLogDto } from './dto/search-member-log.dto';
import { MemberLogOptionsDto } from './dto/member-log-options.dto';
import { ResponseService } from '../../shared/common-modules/response/response.service';

@Controller('member-log')
export class MemberLogController {
  constructor(private readonly memberLogService: MemberLogService,
    private readonly responseService:ResponseService,
  ) {}

  @Get("search")
  async searchAction(@Body() dto: SearchMemberLogDto): Promise<any> {
    try {
      const result = await this.memberLogService.searchMemberLogs(dto);
      const responseOptions = {
        success: true,
        code: 200,
      }
      return { ...responseOptions, data: result.data };
    } catch (error) {
      const status = error.message === "Post Data Missing!" ? 402 : 500;
      const message = error.message === "Post Data Missing!" ? "Post Data Missing!" : "Internal Server Error!";
      return this.responseService.createErrorResponse(status,message);
    }
  }

  @Get("options")
  async memberLogsOptionsAction(@Body() dto: MemberLogOptionsDto): Promise<any> {
    try {
      const result = await this.memberLogService.getMemberLogsOptions(dto);
      const respnseOptions = {
        success: true,
        code: 200,
      }
      return { ...respnseOptions, data: result };
    } catch (error) {
      throw new Error(error);
    }
  }

}
