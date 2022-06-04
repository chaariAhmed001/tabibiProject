import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './schemas/message.schema';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) {}

    @Post('/create')
    async addMessage(@Res() res, @Body() reqBody) {
      const message = await this.messagesService.create(reqBody);
      return res.status(HttpStatus.OK).json({
        feedback: 'Message has been created successfully',
        message,
      });
    }
  
    // Get messages
    @Post('/getAll')
    async getAllMessages(@Res() res, @Body() reqBody) {
      const messages = await this.messagesService.findAll(reqBody);
      return res.status(HttpStatus.OK).json(messages);
    }


}
