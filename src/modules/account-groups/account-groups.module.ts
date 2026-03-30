import { Module } from '@nestjs/common';
import { AccountGroupsService } from './account-groups.service';
import { AccountGroupsController } from './account-groups.controller';
import { CommonService } from '../../shared/common/common.service';

@Module({
  controllers: [AccountGroupsController],
  providers: [AccountGroupsService,CommonService],
})
export class AccountGroupsModule {}
