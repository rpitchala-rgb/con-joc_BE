import { Module } from '@nestjs/common';
import { MockUserService } from './mock-user.service';
import { MockUserController } from './mock-user.controller';
import { ResponseService } from 'src/shared/common-modules/response/response.service';

@Module({
  controllers: [MockUserController],
  providers: [MockUserService,ResponseService],
})
export class MockUserModule {}
