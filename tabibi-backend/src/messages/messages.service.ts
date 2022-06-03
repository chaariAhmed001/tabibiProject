import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './schemas/message.schema';

@Injectable()
export class MessagesService {
  constructor(@InjectModel('Message') private readonly messageModel: Model<Message>) { }
    
  create(createMessageSchema: Message) {
    const newMsg = new this.messageModel(createMessageSchema);
    newMsg.save();
     return newMsg;
  }

  async findAll() {
    const messages = await this.messageModel.find().exec();
    return messages;
  }

  identify(name : string, clientId: string ) {

  }
  getClientName(clientId:string){
    //return this.clientToUser[clientId];
    //return await this.userModel.findOne({ email }).exec();
  }
  /*async editPost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
    const editedPost = await this.postModel
      .findByIdAndUpdate(postID, createPostDTO, { new: true });
    return editedPost;
  }*/
}
