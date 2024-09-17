import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { Car, User } from "@prisma/client";
import { UserDTO } from '../dtos/user.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Get all users' })
  @Get('user')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Get a user by id' })
  @Get('user/:id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
          example: 'NewUser',
        },
        email: {
          type: 'string',
          example: 'newuser@email.com',
        },
        password: {
          type: 'string',
          example: 'password',
        },
        document_number: {
          type: 'string',
          example: '123456789',
        },
        role_id: {
          type: 'number',
          example: 1,
        },
      },
    },
  })
  @Post('user')
  async create(@Body() data: UserDTO): Promise<User> {
    return this.userService.create(data);
  }

  @ApiOperation({ summary: 'Update a user' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
          example: 'UpdatedUser',
        },
        email: {
          type: 'string',
          example: 'updateduser@email.com',
        },
        password: {
          type: 'string',
          example: 'password',
        },
        document_number: {
          type: 'string',
          example: '123456789',
        },
        role_id: {
          type: 'number',
          example: 1,
        },
      },
    },
  })
  @Put('user/:id')
  async update(@Param('id') id: number, @Body() data: UserDTO): Promise<User> {
    return this.userService.update(id, data);
  }

  @ApiOperation({
    summary: 'Delete a user',
    description: 'Set is_active to false',
  })
  @Delete('user/:id')
  async remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }


}
