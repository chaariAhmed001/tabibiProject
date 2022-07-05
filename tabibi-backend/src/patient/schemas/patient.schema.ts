import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ScheduelDocument = Patient & Document;
@Schema()

export class Patient {
    @Prop({required:true})
    profilImg: string;
    @Prop({required:true})
    phoneNumber: string;
    @Prop({required:true})
    country: string;
    @Prop({required:true})
    email: String;
}

export const PatientSchema = SchemaFactory.createForClass(Patient)