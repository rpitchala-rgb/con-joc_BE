import {
  IsOptional,
  IsString,
  IsNumber,
  IsBoolean,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';



// 🔹 Select Option DTO
class SelectOptionDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  operator: string;

  @IsOptional()
  value: any; // can be string | number | array
}

// 🔹 Order Option DTO
class OrderOptionDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  value: 'ASC' | 'DESC';
}

export class SearchAccountDto {

   @IsOptional()
  @IsString()
  inputValue?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SelectOptionDto)
  selectOptions?: SelectOptionDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => OrderOptionDto)
  orderOptions?: OrderOptionDto;

  @IsOptional()
  @IsString()
  startDate?: string;

  @IsOptional()
  @IsString()
  endDate?: string;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  exportData?: boolean;
}