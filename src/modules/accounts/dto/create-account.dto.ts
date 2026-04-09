import { Transform, Type } from 'class-transformer';
import {
    IsNotEmpty,
	IsNumber,
	IsObject,
	IsString,
	ValidateNested,
} from 'class-validator';

class CreateAccountPayloadDto {
	@IsNotEmpty({message: "All fields are required!"})
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value) 
	@IsString()
	first_name?: string;

	@IsNotEmpty({message: "All fields are required!"})
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
	@IsString()
	last_name?: string;

	@IsNotEmpty({message: "All fields are required!"})
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
	@IsString()
	title?: string;

	@IsNotEmpty({message: "All fields are required!"})
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
	@IsString()
	company?: string;

	@IsNotEmpty({message: "All fields are required!"})
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
	@IsString()
	company_url?: string;

	@IsNotEmpty({message: "All fields are required!"})
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
	@IsString()
	email?: string;

	@IsNotEmpty({message: "All fields are required!"})
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
	@IsString()
	password?: string;

	@IsNotEmpty({message: "All fields are required!"})
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
	@IsString()
	default_gmt?: string;

	@IsNotEmpty({message: "All fields are required!"})
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
	@IsString()
	default_caller_id?: string;

	@IsNotEmpty({message: "All fields are required!"})
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
	@IsString()
	country?: string;

	@IsNotEmpty({message: "All fields are required!"})

	@Type(() => Number)
	@IsNumber()
	security_compliance?: number;

	@IsNotEmpty({message: "All fields are required!"})
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
	@IsString()
	test_account?: string;

	@IsNotEmpty({message: "All fields are required!"})
	@Type(() => Number)
	@IsNumber()
	minimum_seats?: number;

	@IsNotEmpty({message: "All fields are required!"})
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
	@IsString()
	minimum_seats_expire?: string;

	@IsNotEmpty({message: "All fields are required!"})
    @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
	@IsString()
	contract_start_date?: string;
}

export class CreateAccountDto {
	@IsObject()
	@ValidateNested()
	@Type(() => CreateAccountPayloadDto)
	data: CreateAccountPayloadDto;
}
