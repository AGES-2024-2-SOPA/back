import { Controller, Post, Body } from '@nestjs/common';

import { SellerService } from '../service/seller.service';
import { Seller } from '@prisma/client';
import { SellerDTO } from '../dtos/seller.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('seller')
export class SellerController {
  constructor(private sellerService: SellerService) {}

  @ApiOperation({ summary: 'Create a new seller' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
              example: 'name',
            },
            email: {
              type: 'string',
              example: 'name@gmail.com',
            },
            password: {
              type: 'string',
              example: '123',
            },
            document_number: {
              type: 'string',
              example: '333',
            },
            role: {
              type: 'object',
              properties: {
                enumerator: {
                  type: 'string',
                  example: 'seller',
                },
              },
            },
          },
        },
        seller_code: {
          type: 'string',
          example: '11111111111',
        },
        company_name: {
          type: 'string',
          example: 'ferro_velho',
        },
        trading_name: {
          type: 'string',
          example: 'ferro',
        },
        document_number: {
          type: 'string',
          example: '999',
        },
        email: {
          type: 'string',
          example: 'aaa@gmail.com',
        },
        phone_country_code: {
          type: 'string',
          example: '55',
        },
        phone_area_code: {
          type: 'string',
          example: '51',
        },
        phone_number: {
          type: 'string',
          example: '999999999',
        },
        street: {
          type: 'string',
          example: 'Rua 7',
        },
        neighborhood: {
          type: 'string',
          example: 'AAAAA',
        },
        number: {
          type: 'string',
          example: '444',
        },
        city: {
          type: 'string',
          example: 'Porto Alegre',
        },
        state: {
          type: 'string',
          example: 'RS',
        },
        complement: {
          type: 'string',
          example: '4',
        },
        postal_code: {
          type: 'string',
          example: '99999999',
        },
      },
    },
  })
  @Post()
  async createSeller(@Body() data: SellerDTO): Promise<Seller> {
    console.log(data);
    return this.sellerService.create(data);
  }
}
