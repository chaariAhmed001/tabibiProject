import { Test, TestingModule } from '@nestjs/testing';
import { PatientInfoService } from './patient-info.service';

describe('PatientInfoService', () => {
  let service: PatientInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientInfoService],
    }).compile();

    service = module.get<PatientInfoService>(PatientInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
