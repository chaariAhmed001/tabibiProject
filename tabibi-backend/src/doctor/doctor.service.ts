import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { Doctor } from './schemas/doctor.schema';

@Injectable()
export class DoctorService {
    constructor(@InjectModel('Doctor') private readonly doctorModel: Model<Doctor>,
    private readonly userService: UserService
  ) { }
  async getOne(email): Promise<Doctor> {
    return await this.doctorModel.findOne({ email }).exec();
  }

  async createDoctor(doctor : Doctor): Promise<Doctor> {
      const reqBody = {
        speciality: doctor.speciality,
        education : doctor.education,
        profilImg: doctor.profilImg,
        phoneNumber: doctor.phoneNumber,
        cabinetAddress: doctor.cabinetAddress,
        generalDes : doctor.generalDes,
        detailDes: doctor.detailDes,
        email: doctor.email,
      }
      //const foundDoctor = await this.doctorModel.findOne({ email: doctor.email }).exec();
        const newDoctor = new this.doctorModel(reqBody);
        return newDoctor.save();
      // else
      // throw new HttpException('Doctor is already in use ', HttpStatus.UNAUTHORIZED);   
    }
    async getDoctor(docId): Promise<Doctor> {
      const post = await this.doctorModel
        .findById(docId)
        .exec();
      return post;
    }
    async updateDoctor(docId, doctor : Doctor): Promise<Doctor> {
      const updateDoc = await this.doctorModel
        .findByIdAndUpdate(docId, doctor, { new: true });
      return updateDoc;
    }
    
}
