import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { JocDatabaseModule } from '../../shared/joc-database/joc-database.module';
import { JocMainDatabaseService } from '../../shared/joc-database/joc-main-database.service';
import { AccountsUtility } from './accounts.utility';
import { CommonService } from '../../shared/common/common.service';
import { SubscriptionActionService } from '../../shared/common-functions/subscriptionAction';
import { projectxApiService } from '../../shared/projectX_Api/projectx-api.service';
import { Utility } from '../../shared/utility/utility';


@Module({
  imports: [JocDatabaseModule],
  controllers: [AccountsController],
  providers: [AccountsService, AccountsUtility, CommonService, SubscriptionActionService,Utility,projectxApiService],
  exports: [AccountsUtility, AccountsService, SubscriptionActionService, projectxApiService]
})
export class AccountsModule {}
