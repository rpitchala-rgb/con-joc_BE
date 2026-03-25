import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MockUserService } from './mock-user.service';
import { CreateMockUserDto } from './dto/create-mock-user.dto';
import { UpdateMockUserDto } from './dto/update-mock-user.dto';
import { ResponseService } from '../../../shared/common-modules/response/response.service';
import { SearchMockUserDto } from './dto/search-mock-user.dto';
import { Roles } from '../../../shared/guards/role.decorator';

@Controller('mockUser')
@Roles('admin')
export class MockUserController {
  constructor(private readonly mockUserService: MockUserService, 
    private readonly responseService: ResponseService) {}

  @Get()
  async getUserData():Promise<any>{
    try{
      const result = await this.mockUserService.getDetails();
      const responseOptions = {
        status:200,
        message:"Data Fetched Successfully"
      }

      return this.responseService.createSuccessResponse1(result,responseOptions);
      
    }catch(error){
      const status = error.message === "error.message" ? 404 : 500;
      const message = error.message === "error.message" ? "error.message" : "getErrorMessage";
      return this.responseService.createErrorResponse(status,message);
     
    }
  }

  @Post("create")
  async createUserData(@Body() mockUserDto:CreateMockUserDto):Promise<any>{
    try{
      const result = await this.mockUserService.createUser(mockUserDto)
      const responseOptions = {
        status:200,
        message:"User Created Successsfully."
      }
      return this.responseService.createSuccessResponse1(result,responseOptions);

    }catch(error){
      const status = error.message === "User Data Exists." ? 404 : 500;
      const message = error.message === "User Data Exists." ? "User Data Exists." : "postErrorMessage";
      return this.responseService.createErrorResponse(status,message);
    }
  }

  @Patch(":id")
  async updateUser(@Body() updateUserDto:UpdateMockUserDto,@Param("id") id:number):Promise<any>{
    try{

      const updateUser = await this.mockUserService.updateUser(updateUserDto,id);
      const responseOptions = {
        status : 200,
        message: "User Updated Successfully."
      }
      return this.responseService.createSuccessResponse1(updateUser,responseOptions);

    }catch(error){
      const status = error.message === "User with this id is not present" ? 404 : 500;
      const message = error.message === "User with this id is not present" ? "User with this id is not present":"updateErrorMessage";
      return this.responseService.createErrorResponse(status,message);
    }
  }

  @Delete(":id")
  async deleteUser(@Param("id") id:number):Promise<any>{
    try{
      const result = await this.mockUserService.deleteUser(id);
      const responseOptions = {
        status :200,
        message:"Deleted Successfully."
      }
      return this.responseService.createSuccessResponse1(result,responseOptions);

    }catch(error){
      throw new Error(error);
    }
  }
  
  @Post("search")
  async searchData(@Body() searchUserDto:SearchMockUserDto):Promise<any>{
    try{
      const result = await this.mockUserService.searchData(searchUserDto);
      const responseOptions = {
        status:200,
        message:"Searched Successfully"
      }
      return this.responseService.createSuccessResponse1(result,responseOptions);

    }catch(error){

    }
  }

  // @Get("asterisk")
  // async getAsteriskApi():Promise<any>{
  //   try{
  //     const result = await this.mockUserService.asteriskData();
  //     const responseOptions = {
  //       status:200,
  //       message:"Success"
  //     }
  //     return this.responseService.createSuccessResponse(result,responseOptions);

  //   }catch(error){
  //     const status = error.message === "No data found in the database"  ? 404 : 500;
  //     const message = error.message === "No data found in the database" 
  //     ? "No data found in the database" : "CommonErrorMessage";
  //     return this.responseService.createErrorResponse(status, message);
  //   }
  // }

// @Get('test-db')
// async mockingClusters1() {
//     try {
//       const result = await this.mockUserService.mockingClusters();
//       const responseOptions = {
//         status: 200,
//         message: "Data fetched successfully"
//       }
//       return this.responseService.createSuccessResponse(result, responseOptions);
//     }catch(error){
//       const status = error.message === "No data found in the database"  ? 404 : 500;
//       const message = error.message === "No data found in the database" 
//       ? "No data found in the database" : "CommonErrorMessage";
//       return this.responseService.createErrorResponse(status, message);
//     }
// }
}

