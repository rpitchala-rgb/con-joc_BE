import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { JocDatabaseModule } from '../../shared/joc-database/joc-database.module';
import { JocMainDatabaseService } from '../../shared/joc-database/joc-main-database.service';
import { AccountsUtility } from './accounts.utility';
import { CommonService } from 'src/shared/common/common.service';

@Module({
  imports: [JocDatabaseModule],
  controllers: [AccountsController],
  providers: [AccountsService, AccountsUtility, CommonService, JocMainDatabaseService],
  exports: [AccountsUtility, AccountsService]
})
export class AccountsModule {}
