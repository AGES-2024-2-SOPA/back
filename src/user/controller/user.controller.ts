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
import { Prisma, User } from '@prisma/client';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('user')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('user/:id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post('user')
  async create(@Body() data: Prisma.UserCreateInput): Promise<User> {
    console.log(data);
    return this.userService.create(data);
  }

  @Put(':id')
  async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  async remove(id: number) {
    return this.userService.remove(id);
  }
}
