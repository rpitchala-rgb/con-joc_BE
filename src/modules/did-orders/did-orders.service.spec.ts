import { Test, TestingModule } from '@nestjs/testing';
import { DidOrdersService } from './did-orders.service';

describe('DidOrdersService', () => {
  let service: DidOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DidOrdersService],
    }).compile();

    service = module.get<DidOrdersService>(DidOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
