import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import console from 'console';
import { Model } from 'mongoose';
import { doc } from 'prettier';
import { User } from 'src/user/schemas/user.schema';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { Doctor } from './schemas/doctor.schema';

@Injectable()
export class DoctorService {
    constructor(@InjectModel('Doctor') private readonly doctorModel: Model<Doctor>,
    private readonly userService: UserService
  ) { }
  async getDoc(docId){
    const doc = await this.doctorModel.findById(docId).exec();
    const user = await this.userService.getOne(doc.email);
    return {
      doctor: doc,
      user: user
    }
  }
  async getUser(email){
    const user = await this.userService.getOne(email);
    return user
  }
  async getAllDoctors() {
    return await this.doctorModel.find().exec();
    /*let all;
    doctors.forEach((doc,index)=>{
      this.getOne(doc.email).then(res =>all+={ index: res})
    })
    return all*/
  }
  async getToDayDoctors(): Promise<Doctor[]> {
    let todayDoctors=[];
    const today = new Date
    const doctors =await this.doctorModel.find().exec();
    doctors.forEach(element => {
      if(element.crated.getDay() === today.getDay() && element.crated.getMonth() === today.getMonth() && element.crated.getFullYear() === today.getFullYear())
      {
        todayDoctors.push(element);

      }
    });
    return todayDoctors
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
        crated: doctor.crated,
        coordinates:doctor.coordinates
      }
      //const foundDoctor = await this.doctorModel.findOne({ email: doctor.email }).exec();
        const newDoctor = new this.doctorModel(reqBody);
        return newDoctor.save();
      // else
      // throw new HttpException('Doctor is already in use ', HttpStatus.UNAUTHORIZED);   
    }
    async getDoctor(email): Promise<Doctor> {
      const post = await this.doctorModel
        .findOne({ email })
        .exec();
      return post;
    }
    

    async updateDoctor(docId, doctor : Doctor): Promise<Doctor> {
      const updateDoc = await this.doctorModel
        .findByIdAndUpdate(docId, doctor, { new: true });
      return updateDoc;
    }
    async delete(id): Promise<any> {
      return await this.doctorModel.findByIdAndRemove(id);
    }
}
