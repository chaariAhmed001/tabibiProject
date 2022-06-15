import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Education } from "./Education";

class Coordinates{
    lat: string;
    lng: string;
}
export type DoctorDocument = Doctor & Document;
@Schema()

export class Doctor {
    @Prop({required:true})
    speciality: string;
    @Prop({required:true})
    profilImg: string;
    @Prop({required:true})
    phoneNumber: String;
    @Prop({required:true})
    cabinetAddress : String;
    @Prop({required:true})
    generalDes: String;
    @Prop()
    detailDes : String;
    @Prop({required:true})
    education : Education;
    @Prop({required:true})
    email: String;
    @Prop({required:true})
    crated: Date;
    @Prop({required:true})
    coordinates : Coordinates;
    @Prop({required:true})
    skills: String [];
    @Prop({required:true})
    experience : String;
    @Prop({required:true})
    city : String;
    
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor)