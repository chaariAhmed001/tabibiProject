import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type MessageDocument = Message & Document;
@Schema()

export class Message {
    @Prop({required:true})
      message: string;
      @Prop({required:true})
      users: [];
      @Prop({required:true})
      sender: string;
      @Prop({required:true}) 
      date: Date;
}
export const messageSchema = SchemaFactory.createForClass(Message)