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
      return this.responseService.success(result);
    }catch(error){
      throw new Error(error);
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
     return{ ...responseOptions, operators: result.operators, filters: result.filters, data: result.data };
    } catch (error) {
      return this.responseService.createErrorResponse(500,"Internal Server Error!");
    }
  }

}
