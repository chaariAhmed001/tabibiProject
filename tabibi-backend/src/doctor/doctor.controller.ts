import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Request, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path = require('path');
import { Observable, of } from 'rxjs';
import { DoctorService } from './doctor.service';
import { Doctor } from './schemas/doctor.schema';
import { v4 as uuidv4 } from 'uuid';
import { response } from 'express';
import { ValidateObjectId } from 'src/blog/shared/pipes/validate-object-id.pipes';

@Controller('doctor')
export class DoctorController {
    constructor(private readonly doctorService: DoctorService, 
    ){}
    @Get('findDoc/:id')
    async getUserType(@Param('id') id) {
      const res = this.doctorService.getOne(id);
      return res;
    }
    @Get('findUser/:email')
    async getUser(@Param('email') email) {
      const res = this.doctorService.getUser(email);
      return res;
    }
    @Post('/signUp')
    @UseInterceptors(FileInterceptor('profilImg', 
    {
        storage: diskStorage({
            destination: 'C:/Bohmid/Tabibi/tabibi-front/src/Imges/doctorProfilImg',
             filename: (req, file, cb) => {
                 cb(null, `${file.originalname}`)
             }
        })
    }
    ))
    async createUser(@UploadedFile() file,@Res() response, @Body() doctor: Doctor){
        //console.log(file.path);
        console.log(doctor)
       const newdoc = new Doctor; 
       newdoc.email= doctor.email;
       newdoc.education=doctor.education;
       newdoc.profilImg=doctor.profilImg;
       newdoc.speciality=doctor.speciality;
       newdoc.phoneNumber= doctor.phoneNumber;
       newdoc.cabinetAddress=doctor.cabinetAddress;
       newdoc.generalDes =doctor.generalDes;
       newdoc.detailDes=doctor.detailDes;
       newdoc.crated=doctor.crated;

        const result = await this.doctorService.createDoctor(newdoc);
         return response.status(HttpStatus.CREATED).json({
             result,
        })
    }
    @Get('/doctors')
    async fetchAll(@Res() response) {
        const res = await this.doctorService.getAllDoctors();
        return response.status(HttpStatus.OK).json({
            res
        })
    }
    @Get('/todayDoctors')
    async getToDayUsers(@Res() response) {
        const doctors = await this.doctorService.getToDayDoctors();
        return response.status(HttpStatus.OK).json({
            doctors
        })
    }
    @Get(':docId')
    async getDoctor(@Res() res, @Param('docId', new ValidateObjectId()) docId) {
        const doctor = await this.doctorService.getDoctor(docId);
        if (!doctor) {
            throw new NotFoundException('Doctor does not exist!');
        }
        return res.status(HttpStatus.OK).json(doctor);
    }
    
    //  @Get('doctor/:email')
    //  async getDoctorByEmail(@Res() res,@Param() docEmail){
    //      const doctor =  await this.doctorService.getOne(docEmail);
    //      if (!doctor) {
    //          throw new NotFoundException('Doctor does not exist!');
    //      }
    //     return res.status(HttpStatus.OK).json(doctor);
    //  }
   
  
  @Put('/update/:id')
  @UseInterceptors(FileInterceptor('profilImg', 
    {
        storage: diskStorage({
            destination: 'C:/Bohmid/Tabibi/tabibi-front/src/Imges/doctorProfilImg',
             filename: (req, file, cb) => {
                 cb(null, `${file.originalname}`)
             }
        })
    }
    ))
  async updaetDoctor(@UploadedFile() file,@Res() res,@Param('id') docID,@Body() doctor: Doctor,
  ) {
    //console.log(file.path);
    const updateDoc = await this.doctorService.updateDoctor(docID, doctor);
    if (!updateDoc) {
        throw new NotFoundException('Doctor does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Doctor has been successfully updated',
      doctor: updateDoc,
    });
  }
  @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedDoc = await this.doctorService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedDoc
        })
    }
}