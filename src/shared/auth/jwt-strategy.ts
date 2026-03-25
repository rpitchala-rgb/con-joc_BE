
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import * as fs from 'fs';
import path from 'path';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configServie: ConfigService) {

    const keyPath = configServie.get<string>('JWT_PUBLIC_KEY');
    const publicKey = fs.readFileSync(path.join(process.cwd(), keyPath as string), 'utf8');
    super({
      jwtFromRequest: (req:any) => {
        return req?.headers?.token;
      },
      ignoreExpiration: false,
      secretOrKey: publicKey,
      algorithms:['RS256']
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      email: payload.email,
      role: payload.role,
    };
  }
}
