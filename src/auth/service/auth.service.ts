import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from 'src/user/service/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    pass: string,
  ): Promise<{
    accessToken: string;
  }> {
    const user = await this.userService.findByEmail(email);
    if (user.password !== pass) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'E-mail or password is incorrect',
          translation: 'E-mail ou senha incorretos',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
    const payload = { id: user.id, role: user.role.enumerator };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
