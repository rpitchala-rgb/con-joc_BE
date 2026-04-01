import { IsArray, IsString } from "class-validator";


export class SelectOptionDto {
  @IsString()
  name: string;

  @IsString()
  operator: string;
  
  value: any;
}

export class OrderOptionDto {
  @IsString()
  name: string;
  
  @IsString()
  value: 'ASC' | 'DESC';
}

export class SearchAccountGroupDto {

  page?: number = 0;

  inputValue?: string = '';

  start_date?: string;

  end_date?: string;

  limit?: number;

  orderOptions?: OrderOptionDto;

  selectOptions?: SelectOptionDto[];
}