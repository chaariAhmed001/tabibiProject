import { Module } from '@nestjs/common';
import { PatientInfoService } from './patient-info.service';
import { PatientInfoController } from './patient-info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {  PatientInfoSchema } from './schemas/patient-info';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'PatientInfo', schema: PatientInfoSchema }])],
  controllers: [PatientInfoController],
  providers: [PatientInfoService]
})
export class PatientInfoModule {}
