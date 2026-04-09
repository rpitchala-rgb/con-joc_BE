import { Body, Controller, Get, Post, Put, Req, Query, Param, Inject } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { SearchAccountDto } from './dto/search-account.dto';
import { ResponseService } from '../../shared/common-modules/response/response.service';
import { UpdateAccountDto } from './dto/update-account.dto';
import { CreateNotesDto } from './dto/create-notes.dto';

@Controller('projectx/accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService,
     private readonly responseService:ResponseService){}

  @Post('create')
  async createAction(@Body() createAccountDto: CreateAccountDto, @Req() req: any): Promise<any> {
    try {
      const result = await this.accountsService.createAction(
        createAccountDto,
        req?.user?.userId,
      );

      const responseOptions = {
        success: true,
        code: 200,
        text: 'Account created successfully!',
      };
      const responseData = this.responseService.success({ u_id: result.u_id }, responseOptions);
      return responseData;
    } catch (error) {
      const success = error.message === "Such email already exists!" ? false : false;
      const code = error.message === "Such email already exists!" ? error.code : 500;
      const text = error.message === "Such email already exists!" ? error.message : 'Internal Server Error!';
      return this.responseService.createErrorResponse(success,code,text);
    }
  }

  @Get("search")
  async searchAction(@Body() searchAccountDto: SearchAccountDto): Promise<any> {
    try{
      const result = await this.accountsService.searchAction(searchAccountDto);
      const responseOptions = {
        success: true,
        code: 200,
      }
      return this.responseService.createSuccessResponse(responseOptions, result);
    }catch(error){
      return this.responseService.createErrorResponse(false, 500, "Internal Server Error!");
    }
   
  }

  @Get("options")
  async optionsAction(): Promise<any> {
    try {
     const result = await this.accountsService.getAccountOptions();
     const responseOptions = {
      success: true,
      code: 200,
     }
     return { ...responseOptions, operators: result.operators, filters: result.filters, data: result.data };
    } catch (error) {
      return this.responseService.createErrorResponse(false, 500, "Internal Server Error!");
    }
  }

  // GET /projectx/accounts/save?u_id=xxx  — load account for edit form
  @Get(":u_id/settings")
  async getSaveAction(@Param('u_id') u_id: string): Promise<any> {
    try {
      const result = await this.accountsService.getSaveAction(u_id?.trim());
      const responseOptions = {
        success: true,
        code: 200,
      }
      return { ...responseOptions, data: result };
    } catch (error) {
      const success = error.message === "Account not found!" ? false : false;
      const status = error.message === "Account not found!" ? 403 : 500;
      const text = error.message === "Account not found!" ? error.message : 'Internal Server Error!';
      return this.responseService.createErrorResponse(success, status, text);
    }
  }

  // PUT /projectx/accounts/save  — persist account changes
  @Put(":u_id/settings")
  async putSaveAction(@Param('u_id') u_id: string, @Body() updateAccountDto: UpdateAccountDto): Promise<any> {
    try {
      const result = await this.accountsService.updateAction(u_id?.trim(), updateAccountDto);
      const responseOptions = {
        success: true,
        status: 200,
      }
      return { ...responseOptions, data: result };
    } catch (error) {
      const success = error.message === "Account not found!" || 
      error.message === "Account info not found for account_id " ? false : false;
      const status = error.message === "Account not found!" || 
      error.message === "Account info not found for account_id " ? 403 : 500;
      const text = error.message === "Account not found!" || 
      error.message === "Account info not found for account_id " ? error.message : 'Internal Server Error!';
      return this.responseService.createErrorResponse(success, status, text);
    }
  }

  @Get(':u_id/page/:page/notes')
  async getAccountNotes(@Param('u_id') u_id: string, @Param('page') page: number, @Req() req: any): Promise<any> {
    try{
      const result = await this.accountsService.accountNotesGetAction(u_id?.trim(), page, req?.user?.userId);
      return  result 

    }catch(error){
      return this.responseService.createErrorResponse(false, 500, "Internal Server Error!");
    }
  }

  @Post(':u_id/page/:page/notes')
  async postAccountNotes(@Param('u_id') u_id: string, @Param('page') page: number, @Body() createNotesDto: CreateNotesDto, @Req() req: any): Promise<any> {
    try {
      const result = await this.accountsService.accountNotesPostAction(u_id, createNotesDto, req?.user?.userId);
      return result;
    } catch (error) {
      return this.responseService.createErrorResponse(false, 500, "Internal Server Error!");
    }
  }

}
