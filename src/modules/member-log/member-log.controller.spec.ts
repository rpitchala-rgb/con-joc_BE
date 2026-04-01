import { Test, TestingModule } from '@nestjs/testing';
import { MemberLogController } from './member-log.controller';
import { MemberLogService } from './member-log.service';

describe('MemberLogController', () => {
  let controller: MemberLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberLogController],
      providers: [MemberLogService],
    }).compile();

    controller = module.get<MemberLogController>(MemberLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
