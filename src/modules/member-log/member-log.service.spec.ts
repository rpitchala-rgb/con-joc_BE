import { Test, TestingModule } from '@nestjs/testing';
import { MemberLogService } from './member-log.service';

describe('MemberLogService', () => {
  let service: MemberLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemberLogService],
    }).compile();

    service = module.get<MemberLogService>(MemberLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
