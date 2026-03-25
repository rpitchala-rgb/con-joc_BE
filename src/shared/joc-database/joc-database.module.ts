import { Global, Module } from '@nestjs/common';
import { JocDatabaseService } from './joc-database.service';


@Global()
@Module({
  providers: [
    JocDatabaseService],
  exports: [
    JocDatabaseService],
})
export class JocDatabaseModule {}