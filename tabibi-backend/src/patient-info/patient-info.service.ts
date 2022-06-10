import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientInfoDto } from './dto/create-patient-info.dto';
import { UpdatePatientInfoDto } from './dto/update-patient-info.dto';
import { PatientInfo } from './schemas/patient-info';

@Injectable()
export class PatientInfoService {

  constructor(@InjectModel('PatientInfo') private readonly patientInfoModel: Model<PatientInfo>) { }

  async create(PatientInfo: PatientInfo) : Promise<PatientInfo>{
    const newInfo = new this.patientInfoModel(PatientInfo);
    return newInfo.save();
  }
  
  async get(patientInfoId): Promise<PatientInfo> {
    const patientInfo = await this.patientInfoModel
      .findById(patientInfoId)
      .exec();
    return patientInfo;
  }

}
