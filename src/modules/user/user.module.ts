import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CommonService } from '../../shared/common/common.service';
import { UsersUtility } from './users.utility';
import { Utility } from '../../shared/utility/utility';

@Module({
  controllers: [UserController],
  providers: [UserService, CommonService, UsersUtility,Utility],
})
export class UserModule {}
