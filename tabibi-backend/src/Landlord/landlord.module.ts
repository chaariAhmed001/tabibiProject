import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LandlordController } from './landlord.controller';
import { LandlordService } from './landlord.service';
import { Landlord, LandlordSchema } from './schemas/landlord.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'Landlord', schema: LandlordSchema}])],
  controllers: [LandlordController],
  providers: [LandlordService]
})
export class LandlordModule {}
