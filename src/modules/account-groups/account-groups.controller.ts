import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AccountGroupsService } from './account-groups.service';
import { CreateAccountGroupDto } from './dto/create-account-group.dto';
import { UpdateAccountGroupDto } from './dto/update-account-group.dto';
import { SearchAccountDto } from '../accounts/dto/search-account.dto';
import { ResponseService } from '../../shared/common-modules/response/response.service';

@Controller('projectx/account-group')
export class AccountGroupsController {
  constructor(private readonly accountGroupsService: AccountGroupsService,
    private responseService : ResponseService
  ) {}

@Get("search")
 async searchAction(@Body() dto: SearchAccountDto) {
  try{
    const result = await this.accountGroupsService.getFilteredAccountGroups(dto);
    const responseOptions  = {
      success: true,
      code :200
    }
    return this.responseService.createSuccessResponse(responseOptions,result);
  }catch(error){
    throw new Error(error);
  }
 }

 @Post("create")
 async create(@Body() createAccountGroupDto: CreateAccountGroupDto):Promise<any> {
  try{
    const result = await this.accountGroupsService.createAction(createAccountGroupDto);
    const responseOptions  = {
      success: true,
      code :200
    }
    return this.responseService.success(result, responseOptions);
  }catch(error){
    // const status = error.message === "Failed to create account group." ? 403 : 500;
    // const message = error.message === "Failed to create account group." ? error.message : "Internal server error.";
    // return this.responseService.createErrorResponse(status,message);
    throw new Error(error);
  }
 }

 @Delete(":id/delete")
 async deleteAction(@Param("id", ParseIntPipe) id:number):Promise<any>{
  try{
    const result = await this.accountGroupsService.deleteAccountGroup(id);
    const responseOptions = {
      success:true,
      code :200,
      text:"Account Group deleted!"
    }
    return responseOptions;

  }catch(error){
    const success = error.message === "Account Group not found " ? false : false;
    const code = error.message === "Account Group not found " ? 403 : 500;
    const text = error.message === "Account Group not found " ? "Account Group not found " : "Internal server error.";
    return this.responseService.createErrorResponse(success, code, text);
  }
 }


}
