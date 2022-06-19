import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { Landlord } from './schemas/landlord.schema';

@Injectable()
export class LandlordService {
  constructor(@InjectModel('Landlord') private readonly landlordModel: Model<Landlord>,
  private readonly userService: UserService
  ) { }
  
  async addLandlord(landlord : Landlord): Promise<Landlord> {
    const newLandlord = new this.landlordModel(landlord);
    return newLandlord.save();
  } 
  
  async getOne(email): Promise<any> {
    const landlord = await this.landlordModel.findOne({email}).exec();
    const user = await this.userService.getOne(email);
  return {
    landlord: landlord,
    user: user
  };
}
async getHouses(): Promise<Landlord[]> {
  const houses = await this.landlordModel.find().exec();
  return houses;
}
}
