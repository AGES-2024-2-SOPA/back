import { Module } from '@nestjs/common';

import { SellerService } from './service/seller.service';
import { UserService } from 'src/user/service/user.service';
import { SellerController } from './controller/seller.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [SellerService, UserService],
  controllers: [SellerController],
  imports: [SharedModule],
  exports: [SellerService],
})
export class SellerModule {}