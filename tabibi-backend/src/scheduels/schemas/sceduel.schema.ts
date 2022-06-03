import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



export type ScheduelDocument = Scheduel & Document;
@Schema()

export class Scheduel {
    @Prop({required:true})
    date: Date;
    @Prop({required:true})
    patient_id: string;
    @Prop({required:true})
    docotr_id: string;
    
}

export const ScheduelSchema = SchemaFactory.createForClass(Scheduel)