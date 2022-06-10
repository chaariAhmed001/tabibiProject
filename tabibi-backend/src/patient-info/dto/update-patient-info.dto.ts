import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientInfoDto } from './create-patient-info.dto';

export class UpdatePatientInfoDto extends PartialType(CreatePatientInfoDto) {}
