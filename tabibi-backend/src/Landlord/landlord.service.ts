import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Landlord } from './schemas/landlord.schema';

@Injectable()
export class LandlordService {
  constructor(@InjectModel('Landlord') private readonly landlordModel: Model<Landlord>) { }
  
  async addLandlord(landlord : Landlord): Promise<Landlord> {
    const newLandlord = new this.landlordModel(landlord);
    return newLandlord.save();
  } 

}
