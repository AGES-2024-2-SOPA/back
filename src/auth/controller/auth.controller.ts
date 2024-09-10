import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from 'src/auth/service/auth.service';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { AuthDTO } from '../dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Sign in' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'newuser@email.com',
        },
        password: {
          type: 'string',
          example: 'password',
        },
      },
    },
  })
  @Post('sign_in')
  async signIn(@Body() auth: AuthDTO): Promise<{
    accessToken: string;
  }> {
    return this.authService.signIn(auth.email, auth.password);
  }
}
