import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<any> {

    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      'roles',
     [context.getHandler(),
      context.getClass()
     ],
    );

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
     if(context.getClass().name === "AuthController"){
      return true
    }

    if (!requiredRoles.includes(user.role)) {
      throw new ForbiddenException('Access denied');
    }

    return true;
  }
}