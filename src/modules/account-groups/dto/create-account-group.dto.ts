import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAccountGroupDto {

  @IsString()
  @IsNotEmpty({ message: "Account group name shouldn't be empty." })
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  status: string;
}
