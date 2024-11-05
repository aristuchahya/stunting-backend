import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from 'src/common/decorator/public.decorator';
import { Socket } from 'socket.io';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isWebSocket = context.getType() === 'ws';
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    let token: string | undefined;
    if (isWebSocket) {
      const client = context.switchToWs().getClient<Socket>();
      token = this.extractTokenFromSocket(client);
      console.log('Token extracted from WebSocket:', token);
    } else {
      const request = context.switchToHttp().getRequest();
      token = this.extractTokenFromHeader(request);
    }

    if (!token) {
      throw new UnauthorizedException('token not found');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      console.log('JWT payload:', payload);

      if (isWebSocket) {
        const client = context.switchToWs().getClient<Socket>();
        client.data.user = payload; // Simpan payload pengguna di data client
      } else {
        const request = context.switchToHttp().getRequest();
        request['user'] = payload;
      }
    } catch {
      throw new UnauthorizedException('invalid token');
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private extractTokenFromSocket(client: Socket): string | undefined {
    const token = client.handshake.auth?.token;
    console.log('Handshake:', token);
    if (!token) return undefined;
    const [type, jwtToken] = token.split(' ');
    return type === 'Bearer' ? jwtToken : undefined;
  }
}
