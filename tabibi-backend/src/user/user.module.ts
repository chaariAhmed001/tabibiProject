import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
import { secret } from '../utils/constants';
import { join } from 'path/posix';
import { ServeStaticModule } from '@nestjs/serve-static';
import { JwtStrategy } from './strategy/jwt.strategy';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({
      secret,
      signOptions: { expiresIn: '2h' },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    })
], 
  providers: [UserService , JwtStrategy],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
