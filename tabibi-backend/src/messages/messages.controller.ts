import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './schemas/message.schema';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService) {}

    @Post('/create')
    async addMessage(@Res() res, @Body() createMessage: Message) {
      const message = await this.messagesService.create(createMessage);
      return res.status(HttpStatus.OK).json({
        feedback: 'Message has been created successfully',
        message,
      });
    }
  
    // Get messages
    @Get('messages')
    async getAllMessages(@Res() res) {
      const messages = await this.messagesService.findAll();
      return res.status(HttpStatus.OK).json(messages);
    }


}
