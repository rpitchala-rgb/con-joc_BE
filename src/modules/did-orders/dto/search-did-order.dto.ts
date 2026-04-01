import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  IsObject,
} from 'class-validator';
import { Type } from 'class-transformer';

class SelectOptionDto {
  @IsString()
  name: string;

  @IsString()
  operator: string;

  @IsString()
  value: any; 
}

class OrderOptionsDto {
  @IsString()
  name: string;

  @IsString()
  value: 'ASC' | 'DESC';
}

class DateFilterDto {
  @IsString()
  @IsOptional()
  startDate: string;

  @IsString()
  @IsOptional()
  endDate: string;

  @IsString()
  @IsOptional()
  dateType: string;
}

export class SearchDidOrderDto {
  @IsNumber()
  @IsOptional()
  page: number;

  @IsNumber()
  @IsOptional()
  limit: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SelectOptionDto)
  @IsOptional()
  selectOptions: SelectOptionDto[];

  @IsObject()
  @ValidateNested()
  @Type(() => OrderOptionsDto)
  @IsOptional()
  orderOptions: OrderOptionsDto;

  @IsObject()
  @ValidateNested()
  @Type(() => DateFilterDto)
  @IsOptional()
  date: DateFilterDto;
}