import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

export class UpdateCredentialCurrentOptionDto {

    @IsNumber()
    @IsOptional()
    account_id:number;

    @IsString()
    @IsNotEmpty({ message: "Please provide value for field Email!" })
    email:string;

    @IsString()
    @IsOptional()
    first_name:string;

    @IsNumber()
    @IsOptional()
    id:number;

    @IsString()
    @IsOptional()
    last_name:string;

    @IsNumber()
    @IsOptional()
    log_debug_level:number;

    @IsString()
    @IsOptional()
    remote_session:string;

    @IsString()
    @IsOptional()
    remote_session_expired_set:string;

    @IsString()
    @IsOptional()
    talkdesk_user_id:string;

    @IsString()
    @IsOptional()
    title:string;

}

export class UpdateCredentialDto {
    @ValidateNested()
    @Type(() => UpdateCredentialCurrentOptionDto)
    currentOptions: UpdateCredentialCurrentOptionDto;

    
    @IsArray()
    @IsOptional()
    copy_currentOptions: any[];
}