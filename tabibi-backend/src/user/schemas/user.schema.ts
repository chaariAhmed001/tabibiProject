import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail  } from 'class-validator';


export type UserDocument = User & Document;
@Schema()
export class User {
    @Prop({required:true})
    fullname: string;
    @Prop({required:true, unique:true, lowercase:true,type: String,})
    @IsEmail()
    email: string;
    @Prop({required:true})
    password: string
    @Prop({required:true})
    type: string;
    @Prop({required:true})
    status: string;
    @Prop({required:true})
    crated: Date;
}
export const UserSchema = SchemaFactory.createForClass(User)