import { Global, Module } from '@nestjs/common';
import { JocDatabaseService } from './joc-database.service';
import { JocMainDatabaseService } from './joc-main-database.service';
import { AsteriskDatabaseService } from './asterisk-database.service';


@Global()
@Module({
  providers: [
    JocDatabaseService,JocMainDatabaseService,AsteriskDatabaseService],
  exports: [
    JocDatabaseService,JocMainDatabaseService,AsteriskDatabaseService],
})
export class JocDatabaseModule {}