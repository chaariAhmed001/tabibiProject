import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { PatientService } from './patient.service';
import { Patient } from './schemas/patient.schema';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post('/signUp')
  @UseInterceptors(FileInterceptor('profilImg', 
  {
      storage: diskStorage({
          destination: 'C:/Bohmid/Tabibi/tabibi-front/src/Imges/patient',
           filename: (req, file, cb) => {
               cb(null, `${file.originalname}`)
           }
      })
  }
  ))
async addPatient(@UploadedFiles() file,@Res() res, @Body() patient: Patient) {
  const newPatient = await this.patientService.addPatient(patient);
  return res.status(HttpStatus.OK).json({
    message: 'Landlord has been submitted successfully!',
    patient: newPatient ,
  });
}

@Get('/:email')
    async getDoctorByEmail(@Res() res, @Param('email') email) {
      const patient = await this.patientService.getPatient(email);
      if (!patient) {
          throw new NotFoundException('Doctor does not exist!');
      }
      return res.status(HttpStatus.OK).json(patient);
    }
    @Put('/update/:id')
    @UseInterceptors(FileInterceptor('profilImg', 
      {
          storage: diskStorage({
              destination: 'C:/Bohmid/Tabibi/tabibi-front/src/Imges/patient',
               filename: (req, file, cb) => {
                   cb(null, `${file.originalname}`)
               }
          })
      }
      ))
    async updaetDoctor(@UploadedFile() file,@Res() res,@Param('id') PatientId,@Body() Patient: Patient,
    ) {
      
      const updatePatient = await this.patientService.updatePatient(PatientId, Patient);
      if (!updatePatient) {
          throw new NotFoundException('Doctor does not exist!');
      }
      return res.status(HttpStatus.OK).json({
        message: 'Doctor has been successfully updated',
        patient: updatePatient,
      });
    }
    @Get('/doctors')
    async fetchAll(@Res() response) {
        const res = await this.patientService.getAllPatients();
        return response.status(HttpStatus.OK).json({
            res
        })
    }
    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedDoc = await this.patientService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedDoc
        })
    }
}
