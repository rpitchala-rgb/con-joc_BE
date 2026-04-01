import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { JocDatabaseService } from '../../shared/joc-database/joc-database.service';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService,JocDatabaseService],
})
export class TransactionsModule {}
