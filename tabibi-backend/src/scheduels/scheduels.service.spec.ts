import { Test, TestingModule } from '@nestjs/testing';
import { ScheduelsService } from './scheduels.service';

describe('ScheduelsService', () => {
  let service: ScheduelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduelsService],
    }).compile();

    service = module.get<ScheduelsService>(ScheduelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
