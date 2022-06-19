import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { LandlordController } from './landlord.controller';
import { LandlordService } from './landlord.service';
import { Landlord, LandlordSchema } from './schemas/landlord.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'Landlord', schema: LandlordSchema}]),UserModule],
  controllers: [LandlordController],
  providers: [LandlordService]
})
export class LandlordModule {}
