import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {

  email: string;

  password: string;

}