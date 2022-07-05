import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient } from './schemas/patient.schema';

@Injectable()
export class PatientService {
    constructor(@InjectModel('Patient') private readonly patientModel: Model<Patient>
  ) { }
    
  async addPatient(patient : Patient): Promise<Patient> {
    const newPatient = new this.patientModel(patient);
    return newPatient.save();
  } 
  async getPatient(email): Promise<Patient> {
    const patient = await this.patientModel
      .findOne({ email })
      .exec();
    return patient;
  }
  async updatePatient(patientID, patient : Patient): Promise<Patient> {
    const updatePatient = await this.patientModel
      .findByIdAndUpdate(patientID, patient, { new: true });
    return updatePatient;
  }
  async getAllPatients() {
     const patients = await this.patientModel.find().exec();
     return patients;
  }
  async delete(id): Promise<any> {
    return await this.patientModel.findByIdAndRemove(id);
  }
}
