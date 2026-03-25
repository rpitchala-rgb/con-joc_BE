import { Global, Module } from '@nestjs/common';
// import { AsteriskCdrDatabaseServie } from './asterisk-cdr-database.service';
// import { AsteriskDatabaseServie } from './asterisk-database.service';
// import { OmniDatabaseServie } from './omni-database.service';
// import { FreePbkDatabaseServie } from './free-pbk-database.service';
// import { PolarisDatabaseServie } from './polaris-database.service';

@Global()
@Module({
  providers: [
    // AsteriskCdrDatabaseServie,
    // AsteriskDatabaseServie,
    // OmniDatabaseServie,
    // FreePbkDatabaseServie,
    // PolarisDatabaseServie,
  ],
  exports: [
    // AsteriskCdrDatabaseServie,
    // AsteriskDatabaseServie,
    // OmniDatabaseServie,
    // FreePbkDatabaseServie,
    // PolarisDatabaseServie,
  ],
})
export class DatabaseModule {}
