import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { PatientInfoService } from './patient-info.service';
import { CreatePatientInfoDto } from './dto/create-patient-info.dto';
import { UpdatePatientInfoDto } from './dto/update-patient-info.dto';
import { PatientInfo } from './schemas/patient-info';

@Controller('patient-info')
export class PatientInfoController {
  constructor(private readonly patientInfoService: PatientInfoService) {}

  @Post()
  create(@Res() res, @Body() patientInfo: PatientInfo) {
    const newInfo = this.patientInfoService.create(patientInfo);
    
    return res.status(HttpStatus.OK).json({
      message: 'Patienr Info has been submitted successfully!',
      post: newInfo ,
    });
  }
  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientInfoService.get(+id);
  }

}
