import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './jwt-strategy';
import * as fs from 'fs';
import { ConfigService } from '@nestjs/config';
import path from 'path';


@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const privateKeyPath = configService.get('JWT_PRIVATE_KEY');

        const privateKey = fs.readFileSync(path.join(process.cwd(), privateKeyPath), 'utf8');
        return {
          privateKey,
          signOptions: {
            algorithm: 'RS256',
            expiresIn: '1h',
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}