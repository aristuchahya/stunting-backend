// import { UnauthorizedException, UseGuards } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { UseGuards } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';
import { JwtGuard } from 'src/common/guard/jwt/jwt.guard';

@WebSocketGateway({ cors: { origin: '*' } })
@UseGuards(JwtGuard)
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    const user = client.data.user;
    console.log(`UserJoin: ${user}`);
    console.log(`Client connected: ${client.id}`);

    this.server.emit('user-joined', {
      message: `New user joined the chat: ${client.id}`,
    });
  }

  handleDisconnect(client: Socket) {
    const user = client.data.user;
    console.log(`UserLeft: ${user}`);
    console.log(`Client disconnected: ${client.id}`);

    this.server.emit('user-left', {
      message: `User left the chat: ${client.id}`,
    });
  }

  @SubscribeMessage('newMessage')
  handleNewMessage(client: Socket, message: string) {
    const user = client.data.user;
    console.log(`New message received:  ${message}`);

    this.server.emit('message', {
      username: user?.username,
      message,
    });
  }
}
