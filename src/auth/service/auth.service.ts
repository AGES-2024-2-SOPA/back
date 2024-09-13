import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
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
    const v = await bcrypt.compare(pass, user.password);
    if (!v) {
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
