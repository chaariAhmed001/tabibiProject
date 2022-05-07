import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Education } from "./Education";


export type DoctorDocument = Doctor & Document;
@Schema()

export class Doctor {
    @Prop({required:true})
    speciality: string;
    @Prop()
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
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor)