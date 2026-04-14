import { IsNumber } from "class-validator";

export class GetTransactionLogsDto {
    @IsNumber()
    page: number;
}