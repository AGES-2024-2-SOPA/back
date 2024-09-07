import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { User } from '@prisma/client';
import { UserDTO } from '../dtos/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User> {
    return this.prisma.user
      .findUnique({
        where: { id: parseInt(id.toString()) },
      })
      .then((user) => {
        if (!user) {
          return null;
        }
        return user;
      })
      .catch((error) => {
        return error;
      });
  }

  async create(data: UserDTO): Promise<User> {
    return this.prisma.user.create({
      data: {
        document_number: data.document_number,
        email: data.email,
        is_active: true,
        password: data.password,
        username: data.username,
        role_id: data.role_id,
      },
    });
  }

  async update(id: number, data: UserDTO): Promise<User> {
    return this.prisma.user.update({
      where: { id: parseInt(id.toString()) },
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
        document_number: data.document_number,
        role_id: data.role_id,
      },
    });
  }

  async remove(id: number): Promise<User> {
    return this.prisma.user.update({
      where: { id: parseInt(id.toString()) },
      data: { is_active: false },
    });
  }
}
