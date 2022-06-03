import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateScheduelDto } from './dto/create-scheduel.dto';
import { UpdateScheduelDto } from './dto/update-scheduel.dto';
import { Scheduel } from './schemas/sceduel.schema';

@Injectable()
export class ScheduelsService {
  constructor(@InjectModel('Scheduel') private readonly scheduelModel: Model<Scheduel>) { }
  
  create(createScheduelDto: CreateScheduelDto) {
    const newScheduel = new this.scheduelModel(createScheduelDto);
    return newScheduel.save();
    
  }  
  async getScheduelsByDoctor(doctor_id:String): Promise<Scheduel[]> {
    const scheduels = await this.scheduelModel.find().exec();
    let doctorScheduel=[];
    scheduels.forEach(element => {
      if(element.docotr_id === doctor_id)
      {
        doctorScheduel.push(element);

      }
    });
    return doctorScheduel;
  }
  async getScheduelsByPatint(patient_id:String): Promise<Scheduel[]> {
    const scheduels = await this.scheduelModel.find().exec();
    let patientScheduel=[];
    scheduels.forEach(element => {
      if(element.patient_id  === patient_id)
      {
        patientScheduel.push(element);

      }
    });
    return patientScheduel;
  }
  
}
