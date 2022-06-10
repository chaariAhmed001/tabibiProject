import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import{Server,Socket} from'socket.io';
import { Message } from './schemas/message.schema';
import { Global, Logger } from '@nestjs/common';
import console from 'console';
import { EventEmitter } from 'stream';

@WebSocketGateway({
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
})
export class MessagesGateway implements  OnGatewayConnection, OnGatewayDisconnect{
  private readonly logger = new Logger(MessagesGateway.name);
  @WebSocketServer()
  server:Server;
  socket : Socket;
  constructor(private readonly messagesService: MessagesService) {}

  afterInit(): void {
    this.logger.log(`Websocket Gateway initialized.`);
  }

  onlineUsers= new Map();
  handleConnection(client: Socket) {
   
    this.server.on("add-user", (userId) => {
      
        this.onlineUsers.set(userId, client.id);
    });
  }
  handleDisconnect(client: Socket) {}
  
  /*async handleConnection() {
    this.server.emit('add-user', (userId)=>{
      this.onlineUsers.set(userId,this.socket)
    });
    //console.log(this.onlineUsers)
  }
  @SubscribeMessage('add-user')
  addUser( @ConnectedSocket() client: Socket, @MessageBody('userId') userId:string) {
    this.socket.on('user-changed',(userId)=>{
      this.onlineUsers[client.id] = userId;
    });
    
 }*/

  @SubscribeMessage('send-msg')
  async onChat( @ConnectedSocket() client: Socket, @MessageBody('message') message:{ from,to,message}) {
    this.socket.on("send-msg", (data) => {
      const sendUserSocket = this.onlineUsers.get(data.to);
      this.logger.log(sendUserSocket);
      if (sendUserSocket) {
        this.socket.to(sendUserSocket).emit("msg-recieve", data.msg);
      }
    });
    /*console.log(message)
    this.socket.to(message.to).emit('msg-recieve', message.message);
    client.emit('message', {text: message.message, from: this.onlineUsers[client.id], created: new Date()});
  const sendUserSocket = this.onlineUsers.get(message.to);
    if(sendUserSocket){
      
      this.socket.to(sendUserSocket).emit('msg-recieve', message.message); 

    }*/
    // client.broadcast.emit('send-msg', message.message); //sends to other users
    //also sends to himself
  }

}
