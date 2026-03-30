import { Test, TestingModule } from '@nestjs/testing';
import { DidOrdersController } from './did-orders.controller';
import { DidOrdersService } from './did-orders.service';

describe('DidOrdersController', () => {
  let controller: DidOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DidOrdersController],
      providers: [DidOrdersService],
    }).compile();

    controller = module.get<DidOrdersController>(DidOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
