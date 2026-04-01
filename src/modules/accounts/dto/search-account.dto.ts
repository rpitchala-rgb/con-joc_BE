import {
  IsOptional,
  IsString,
  IsNumber,
  IsBoolean,
  IsArray,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';



// 🔹 Select Option DTO
class SelectOptionDto {
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
   @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsString()
  operator: string;

  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsOptional()
  value: unknown
}

// 🔹 Order Option DTO
class OrderOptionDto {
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  value: 'ASC' | 'DESC';
}

export class SearchAccountDto {

  @IsString()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  inputValue: string;

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