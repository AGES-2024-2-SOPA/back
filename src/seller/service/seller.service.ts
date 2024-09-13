import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { UserService } from 'src/user/service/user.service';
import { Seller } from '@prisma/client';
import { SellerDTO } from '../dtos/seller.dto';

@Injectable()
export class SellerService {
    constructor(
        private prisma: PrismaService,
        private userService: UserService,
    ) {}

    async create(data: SellerDTO): Promise<Seller> {

        const user = await this.userService.create({
            username: data.user.username,
            email: data.user.email,
            password: data.user.password,
            document_number: data.user.document_number,
            role_id: 2
        });        

        return this.prisma.seller.create({
            data: {
                user_id: user.id,
                seller_code: data.seller_code,
                company_name: data.company_name,
                trading_name: data.trading_name,
                document_number: data.document_number,
                email: data.email,
                phone_country_code: data.phone_country_code,
                phone_area_code: data.phone_area_code,
                phone_number: data.phone_number,
                street: data.street,
                neighborhood: data.neighborhood,
                number: data.number,
                city: data.city,
                state: data.state,
                complement: data.complement,
                postal_code: data.postal_code,
            },
        });
    }
}