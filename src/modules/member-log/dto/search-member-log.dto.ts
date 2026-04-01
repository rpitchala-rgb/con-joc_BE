import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  IsIn,
} from 'class-validator';
import { Type } from 'class-transformer';

export class SearchMemberLogDto {
  @IsString()
  orderOptions: string;

  @IsString()
  @IsIn(['ASC', 'DESC'])
  orderOptionsValue: 'ASC' | 'DESC';

  @IsArray()
  @IsString({ each: true })
  selectOptions: string[];

  @IsArray()
  @IsOptional()
  selectOptionsValue: any[];

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  page: number;

  @Type(() => Number)
  @IsNumber()
  limit: number;

  @IsOptional()
  @IsString()
  u_id?: string;
}