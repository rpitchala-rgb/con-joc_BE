import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchUserDto } from './dto/search-user.dto';
import { ResponseService } from '../../shared/common-modules/response/response.service';
import { UpdateCredentialDto } from './dto/update-credential.dto';

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

    @Get(':u_id/credential')
  async getCredentialAction(@Param('u_id') u_id: string): Promise<any> {
    try {
      const result = await this.userService.getCredentialAction(u_id?.trim());
      const responseOptions = {
        success: true,
        code: 200,
      }
      return { ...responseOptions, username: result.username, data: result.credentialOptions };
    } catch (error) {
      return this.responseService.createErrorResponse(false, 500, "Internal Server Error!");
    }
  }

  @Put(':u_id/credential')
  async putCredentialAction(@Param('u_id') u_id: string, @Body() updateCredentialDto: UpdateCredentialDto): Promise<any> {
    try {
      const result = await this.userService.credentialActionPut(u_id?.trim(), updateCredentialDto);
      const responseOptions = {
        success: true,
        code: 200,
      }
      return { ...responseOptions, data: result };
    } catch (error) {
     throw new Error(error);
    }

  }
}
