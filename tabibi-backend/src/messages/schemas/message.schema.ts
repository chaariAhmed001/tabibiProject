import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type MessageDocument = Message & Document;
@Schema()

export class Message {
    @Prop({required:true})
    name: string;
    @Prop()
    description: string;
}
export const messageSchema = SchemaFactory.createForClass(Message)