import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';
import { DoctorModule } from './doctor/doctor.module';
import { LandlordModule } from './Landlord/landlord.module';
import { MessagesModule } from './messages/messages.module';
import { ScheduelsModule } from './scheduels/scheduels.module';
import { PatientInfoModule } from './patient-info/patient-info.module';
import { PatientModule } from './patient/patient.module';



@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/tabibi',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
    }), BlogModule, UserModule, DoctorModule,LandlordModule, MessagesModule, PatientModule, ScheduelsModule, PatientInfoModule,
    
],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {
  /*configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(isAuthenticated)
      .exclude(
        { path: 'api/v1/video/:id', method: RequestMethod.GET }
      )
      .forRoutes(VideoController);
  }*/
}
