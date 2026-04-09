import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchUserDto } from './dto/search-user.dto';
import { ResponseService } from '../../shared/common-modules/response/response.service';

@Controller('projectx/users')
export class UserController {
  constructor(private readonly userService: UserService,
    private readonly responseService: ResponseService
  ) {}

  @Get("search")
  async searchAction(@Body() dto:SearchUserDto):Promise<any> {
    try{
      const result = await this.userService.getFilteredUsers(dto);
      const responseOptions = {
        success: true,
        code: 200,
      }
      return this.responseService.createSuccessResponse(responseOptions, result);

    }catch(error){
      throw new Error(error);
    }
  }

  @Get(":u_id/credentials")
  async getCredentials(@Param('u_id') u_id: string): Promise<any> {
    try{
      const result = await this.userService.getUserCredential(u_id);
      return { success: true, code: 200, result: result.username, data: result.data };

    }catch(error){
      const code = error.message === "User not found" ? 404 : 500;
      const text = error.message === "User not found" ? "User not found" : "Internal server error.";
      return this.responseService.createErrorResponse(false, code, text);
    }
  }
}
