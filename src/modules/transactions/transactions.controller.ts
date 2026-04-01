import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Controller('projectx/transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get(":page/failed")
  async getFailedTransactions(@Param('page') page: number): Promise<any> {
    try {
      const result = await this.transactionsService.getFailedTransactionsAction(page);
      const responseOptions = {
        success:true,
        code :200
      }
      return { responseOptions , result } ;
    } catch (error) {
      throw new Error(error);
    }
  }

  @Post(":page/account/:account_id")
  async getFailedTransactionsByAccount(@Param('page') page: number, @Param('account_id') account_id: number): Promise<any> {
    try {
      return await this.transactionsService.getFailedTransactionsByAccount(page, account_id);
    } catch (error) {
      throw new Error(error);
    }
  }

 
}
