import { Test, TestingModule } from '@nestjs/testing';
import { ScheduelsController } from './scheduels.controller';
import { ScheduelsService } from './scheduels.service';

describe('ScheduelsController', () => {
  let controller: ScheduelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduelsController],
      providers: [ScheduelsService],
    }).compile();

    controller = module.get<ScheduelsController>(ScheduelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
