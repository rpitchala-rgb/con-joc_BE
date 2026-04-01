import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResponseModule } from './shared/common-modules/response/response.module';
import { AuthModule } from './shared/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './shared/auth/jwt-auth.guard';
import { RolesGuard } from './shared/guards/role.guard';
import { ConfigModule } from '@nestjs/config';
import { AccountsModule } from './modules/accounts/accounts.module';
import { DatabaseModule } from './shared/database/database.module';
import { DidOrdersModule } from './modules/did-orders/did-orders.module';
import { AccountGroupsModule } from './modules/account-groups/account-groups.module';
import { UserModule } from './modules/user/user.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { MemberLogModule } from './modules/member-log/member-log.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ResponseModule,
    AuthModule,  
    DatabaseModule,
    AccountsModule,
    DidOrdersModule,
    AccountGroupsModule,
    UserModule,
    TransactionsModule,
    MemberLogModule
    
  ],
  controllers: [AppController],
  providers: [
     AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class AppModule {}
