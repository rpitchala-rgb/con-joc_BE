import { Module } from '@nestjs/common';
import { DidOrdersService } from './did-orders.service';
import { DidOrdersController } from './did-orders.controller';
import { AccountsUtility } from '../../modules/accounts/accounts.utility';
import { JocDatabaseService } from '../../shared/joc-database/joc-database.service';
import { JocDatabaseModule } from '../../shared/joc-database/joc-database.module';
import { CommonService } from '../../shared/common/common.service';
import { DidOrdersUtility } from './did-orders.utility';

@Module({
  imports: [JocDatabaseModule],
  controllers: [DidOrdersController],
  providers: [DidOrdersService,DidOrdersUtility,CommonService],
})
export class DidOrdersModule {}
