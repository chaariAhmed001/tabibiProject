import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


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
    photos: string[];
    @Prop()
    options: string;
    @Prop({required:true})
    email: String;
}

export const LandlordSchema = SchemaFactory.createForClass(Landlord)