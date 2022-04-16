import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { DoctorSchema } from './schemas/doctor.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { JwtStrategy } from 'src/user/strategy/jwt.strategy';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'Doctor', schema: DoctorSchema }]),UserModule], 
  controllers: [DoctorController],
  providers: [DoctorService]
})
export class DoctorModule {}
