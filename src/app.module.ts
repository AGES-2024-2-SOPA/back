import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [UserModule, SharedModule, AuthModule, UserModule, SellerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
