import { IsString } from 'class-validator';

export class MemberLogOptionsDto {
  @IsString()
  u_id: string;
}
