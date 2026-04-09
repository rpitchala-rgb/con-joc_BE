import { Type } from "class-transformer"
import { IsString, ValidateNested } from "class-validator"


export class ParametersDto {
    @IsString()
    subject: string
    @IsString()
    body: string
}


export class CreateNotesDto {
    @ValidateNested()
    @Type(() => ParametersDto)
    parameters: ParametersDto
}


