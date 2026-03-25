import {
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const request: Request = context.switchToHttp().getRequest();

    const allowedControllers = [
      'AuthController',
    ];

    const controllerName = context.getClass().name;

    if (allowedControllers.includes(controllerName)) {
      return true;
    }

    const token = request.headers['token'];
    //const email = request.headers['email'];

    if (!token) {
      throw new UnauthorizedException('Authorization token missing');
    }

    return (await super.canActivate(context)) as boolean;
  }

  // handleRequest(err, user, info, context) {

  //   const request = context.switchToHttp().getRequest();
  //   const email = request.headers['email'];

  //   if (!user || user.email !== email) {
  //     throw new UnauthorizedException('Invalid user');
  //   }

  //   return user;
  // }
}