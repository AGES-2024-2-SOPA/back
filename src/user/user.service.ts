import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { UserDTO } from './user.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UserDTO[]> {
    return await this.prisma.user.findMany().then((users) => {
      const transformedUsers: UserDTO[] = [];
      users.forEach((user) => {
        return transformedUsers.push(new UserDTO(user));
      });
      return transformedUsers;
    });
  }

  async findOne(id: number): Promise<UserDTO> {
    return this.prisma.user
      .findUnique({
        where: { id: parseInt(id.toString()) },
      })
      .then((user) => {
        if (!user) {
          return null;
        }
        return new UserDTO(user);
      })
      .catch((error) => {
        return error;
      });
  }

  async create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }

  async update(id: number, data: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
