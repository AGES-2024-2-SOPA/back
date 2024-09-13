import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Role, User } from '@prisma/client';

import { PrismaService } from 'src/shared/prisma/prisma.service';
import { UserDTO } from '../dtos/user.dto';
import { hash } from 'src/Security';


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
          throw new HttpException(
            {
              status: HttpStatus.NOT_FOUND,
              error: 'User not found',
              translation: 'Usuário não encontrado',
            },
            HttpStatus.NOT_FOUND,
          );
        }
        return user;
      })
      .catch((error) => {
        return error;
      });
  }

  async findByEmail(email: string): Promise<User & { role: Role }> {
    // @ts-ignore
    return this.prisma.user
      .findUnique({
        where: { email },
        include: { role: true },
      })
      .then((user) => {
        if (!user) {
          throw new HttpException(
            {
              status: HttpStatus.NOT_FOUND,
              error: 'User not found',
              translation: 'Usuário não encontrado',
            },
            HttpStatus.NOT_FOUND,
          );
        }
        return user;
      })
      .catch((error) => {
        return null;
      });
  }

  async create(data: UserDTO): Promise<User> {
    const passwordHash = await hash(data.password);
    return this.prisma.user.create({
      data: {
        document_number: data.document_number,
        email: data.email,
        is_active: true,
        password: passwordHash,
        username: data.username,
        role_id: data.role_id,
      },
    });
  }

  async update(id: number, data: UserDTO): Promise<User> {
    const passwordHash = await hash(data.password);
    return this.prisma.user.update({
      where: { id: parseInt(id.toString()) },
      data: {
        username: data.username,
        email: data.email,
        password: passwordHash,
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
