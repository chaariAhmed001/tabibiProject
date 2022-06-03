import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type MessageDocument = Message & Document;
@Schema()

export class Message {
    @Prop({
        required: [true, 'Message is required'],
      })
      message: string;
      @Prop({
        required: [true, 'Message is required'],
      })
      users: [];
      @Prop({
        required: [true, 'Sender is required'],
      })
      sender: string;
      
      timestamps: true;
}
export const messageSchema = SchemaFactory.createForClass(Message)