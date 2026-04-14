import { Type } from "class-transformer";
import { IsOptional, IsString, ValidateNested, IsArray } from "class-validator";


export class CurrentOptionsDto{
    @IsString()
    @IsOptional()
    remote_session: string;

} 
export class UpdateUserDto {
    @ValidateNested()
    @Type(() => CurrentOptionsDto)
    currentOptions: CurrentOptionsDto;

    @IsArray()
    @IsOptional()
    copy_currentOptions: any[];
}


    
