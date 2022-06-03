import { Module } from '@nestjs/common';
import { ScheduelsService } from './scheduels.service';
import { ScheduelsController } from './scheduels.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduelSchema } from './schemas/sceduel.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'Scheduel', schema: ScheduelSchema }])], 
  controllers: [ScheduelsController],
  providers: [ScheduelsService]
})
export class ScheduelsModule {}
