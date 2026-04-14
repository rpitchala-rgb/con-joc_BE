import { IsOptional, IsString, IsNumber } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class MoveUserDto {
  @IsOptional()
  @IsNumber()
  user_id?: number;

  @IsOptional()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsString()
  server_ip?: string;

  @IsOptional()
  @IsNumber()
  emergency?: number;
}
