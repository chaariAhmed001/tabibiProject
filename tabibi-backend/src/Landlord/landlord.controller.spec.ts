import { Test, TestingModule } from '@nestjs/testing';
import { LandlordController } from './landlord.controller';

describe('LandlordController', () => {
  let controller: LandlordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LandlordController],
    }).compile();

    controller = module.get<LandlordController>(LandlordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
