import { Module } from '@nestjs/common';
import { MemberLogService } from './member-log.service';
import { MemberLogController } from './member-log.controller';
import { JocDatabaseService } from '../../shared/joc-database/joc-database.service';
import { JocMainDatabaseService } from '../../shared/joc-database/joc-main-database.service';
import { CommonService } from '../../shared/common/common.service';
import { MemberLogUtility } from './member-log.utility';

@Module({
  controllers: [MemberLogController],
  providers: [MemberLogService,
    JocDatabaseService,
    JocMainDatabaseService,
    CommonService,
    MemberLogUtility
  ],
})
export class MemberLogModule {}
