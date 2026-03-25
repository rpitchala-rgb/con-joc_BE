import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { JocDatabaseModule } from '../../shared/joc-database/joc-database.module';
import { AccountsUtility } from './accounts.utility';

@Module({
  imports: [JocDatabaseModule],
  controllers: [AccountsController],
  providers: [AccountsService, AccountsUtility],
  exports: [AccountsUtility,AccountsService]
})
export class AccountsModule {}
