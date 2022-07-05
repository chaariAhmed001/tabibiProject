import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ScheduelsService } from './scheduels.service';
import { CreateScheduelDto } from './dto/create-scheduel.dto';
import { UpdateScheduelDto } from './dto/update-scheduel.dto';

@Controller('scheduels')
export class ScheduelsController {
  constructor(private readonly scheduelsService: ScheduelsService) {}

  @Post()
  create(@Res() res,@Body()createScheduelDto: CreateScheduelDto) {
    const newScheduel = this.scheduelsService.create(createScheduelDto);
    return res.status(HttpStatus.OK).json({
      message: 'Scheduel has been register   successfully!',
      post: newScheduel,
    });
  }

  @Get('scheduel/:doctor_id')
  async getDoctorScheduel(@Res() res,@Param('doctor_id') doctor_id) {
    const posts = await this.scheduelsService.getScheduelsByDoctor(doctor_id);
    return res.status(HttpStatus.OK).json(posts);
  }
  @Get('scheduel/patient/:patient_id')
  async getPatientScheduel(@Res() res,@Param('patient_id') patient_id) {
    const posts = await this.scheduelsService.getScheduelsByPatint(patient_id);
    return res.status(HttpStatus.OK).json(posts);
  }
  @Get('data/:doctor_id')
  async getDataByDoctor(@Res() res,@Param('doctor_id') doctor_id) {
    const posts = await this.scheduelsService.getDataByDoctor(doctor_id);
    return res.status(HttpStatus.OK).json(posts);
  }
}
