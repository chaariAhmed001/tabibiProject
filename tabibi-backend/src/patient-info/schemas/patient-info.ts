import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type PatientInfoDocument = PatientInfo & Document;
@Schema()

export class PatientInfo {
    @Prop({required:true})
    firstName: string;
    @Prop({required:true})
    lastName: string;
    @Prop({required:true})
    age: String;
    @Prop({required:true})
    gendre : String;
    @Prop({required:true})
    speciality: String;
    @Prop({required:true})
    description: String;
    @Prop({required:true})
    patientId: String;
}

export const PatientInfoSchema = SchemaFactory.createForClass(PatientInfo)