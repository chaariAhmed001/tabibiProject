import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

class Coordinates{
    lat: string;
    lng: string;
}
export type LandlordDocument = Landlord & Document;
@Schema()

export class Landlord {
    @Prop({required:true})
    title: string;
    @Prop({required:true})
    phoneNumber: string;
    @Prop({required:true})
    adress: string;
    @Prop({required:true})
    description: string;
    @Prop({required:true})
    price: string;
    @Prop({required:true})
    photo: string;
    @Prop()
    options: string[];
    @Prop({required:true})
    email: String;
    @Prop({required:true})
    coordinates : Coordinates;
    @Prop({required:true})
    area: string;
    @Prop({required:true})
    bedrooms: string;
    @Prop({required:true})
    bathrooms: string;
    @Prop({required:true})
    crated: Date;
    
}

export const LandlordSchema = SchemaFactory.createForClass(Landlord)