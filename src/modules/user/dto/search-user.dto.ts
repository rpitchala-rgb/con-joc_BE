import { IsOptional, IsString } from "class-validator";

export class SearchUserDto {

  @IsOptional()
  page: number;

  @IsOptional()
  @IsString()
  inputValue?: string;

  @IsOptional()
  limit: number;
}