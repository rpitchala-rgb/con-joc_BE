import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { SearchAccountDto } from './dto/search-account.dto';
import { ResponseService } from '../../shared/common-modules/response/response.service';

@Controller('projectx/accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService, private readonly responseService:ResponseService) {}

  @Get("search")
  async get(@Body() searchAccountDto: SearchAccountDto): Promise<any> {
    try{
      const result = await this.accountsService.searchAction(searchAccountDto);
      const responseOptions= {
        success: true,
        code: 200,
      }
      return this.responseService.createSuccessResponse(responseOptions,result);
    }catch(error){
      // const status = error.message === 'No data found' ? 404 : 500;
      // const message =error.message === 'No data found' ? 'No accounts found matching the criteria' : 'An error occurred while fetching accounts';
      // return this.responseService.createErrorResponse( status,message);
      throw new Error(error);
    }
   
  }
  
}
