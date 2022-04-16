import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import console from 'console';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';
import { type } from 'os';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>,
  private jwtService: JwtService
  ) { }


    async createuser(user: User): Promise<User> {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(user.password, salt);
        const reqBody = {
          fullname: user.fullname,
          email: user.email,
          password: hash,
          type: user.type
      }
      const foundUser = await this.userModel.findOne({ email: user.email }).exec();
      if(!foundUser){
        const newUser = new this.userModel(reqBody);
        return newUser.save();
      }
       else if(reqBody.type === '')
        throw new HttpException('specify your account type', HttpStatus.UNAUTHORIZED);
      else
      throw new HttpException('Email is already in use ', HttpStatus.UNAUTHORIZED);
      
      
    }
    async getOne(email): Promise<User> {
      return await this.userModel.findOne({ email }).exec();
  }
  async getUserType(email): Promise<String> {
    const foundUser =this.getOne(email);
    return (await foundUser).type
  }
    async signin(user: User, jwt: JwtService): Promise<any> {
      const foundUser = await this.userModel.findOne({ email: user.email }).exec();
      if (foundUser) {
          const { password } = foundUser;
          if ( await bcrypt.compare(user.password, password)) {
              return this.signUser(foundUser.id,foundUser.fullname,user.email, user.type);
          }
          return new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
      }
      return new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
  } 

  // what jwt token contents: userID, email , userType
    signUser(userId : number,fullname: string,email: string, type: string) {
      return this.jwtService.sign({
        id: userId,
        fullname,
        email,
        type: type,
      });
    }
    async updateUser(userId, user : User): Promise<User> {
      const updateUser = await this.userModel
        .findByIdAndUpdate(userId, user, { new: true });
      return updateUser;
    }
   
    async readAll(): Promise<User[]> {
      return await this.userModel.find().exec();
  }
  async delete(id): Promise<any> {
    return await this.userModel.findByIdAndRemove(id);
  }
}