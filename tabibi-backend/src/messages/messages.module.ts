import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, messageSchema } from './schemas/message.schema';
import { MessagesController } from './messages.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Message', schema:  messageSchema}]),
],
  providers: [MessagesGateway, MessagesService],
  controllers: [MessagesController]
})
export class MessagesModule {}
