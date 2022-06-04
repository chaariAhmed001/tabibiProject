import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import console from 'console';
import { Model } from 'mongoose';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './schemas/message.schema';

@Injectable()
export class MessagesService {
  constructor(@InjectModel('Message') private readonly messageModel: Model<Message>) { }
    
  async create(reqBody : {from , to, message}) {
    const { from, to, message } = reqBody;
    const newMsg =new this.messageModel({
      message: message,
      users: [from, to],
      sender: from,
      date: new Date,
    });
    //const newMsg = new this.messageModel(reqBody);
    newMsg.save();
     return newMsg;
  }

  async findAll(reqBody: { from , to }) {
    const { from , to} =reqBody; 

    const messages = await this.messageModel.find({
      users: {
        $all: [from , to ]
      }
    }).sort({date:1});
    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message,
      };
    });

  return projectedMessages
   
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
