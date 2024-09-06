import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { Prisma } from '@prisma/client';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('user')
  async findAll(): Promise<UserDTO[]> {
    return this.userService.findAll();
  }

  @Get('user/:id')
  async findOne(@Param('id') id: number): Promise<UserDTO> {
    return this.userService.findOne(id);
  }

  @Post('user')
  async create(data: Prisma.UserCreateInput) {
    return this.userService.create(data);
  }

  @Put(':id')
  async update(id: number, data: UserDTO) {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  async remove(id: number) {
    return this.userService.remove(id);
  }
}
