import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from 'src/auth/service/auth.service';
import { UserModule } from 'src/user/user.module';
import { AuthController } from 'src/auth/controller/auth.controller';

import { constants } from 'src/constants';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: constants.jwtSecretKey,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
