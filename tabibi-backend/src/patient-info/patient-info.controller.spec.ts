import { Test, TestingModule } from '@nestjs/testing';
import { PatientInfoController } from './patient-info.controller';
import { PatientInfoService } from './patient-info.service';

describe('PatientInfoController', () => {
  let controller: PatientInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientInfoController],
      providers: [PatientInfoService],
    }).compile();

    controller = module.get<PatientInfoController>(PatientInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
