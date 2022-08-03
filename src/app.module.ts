import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MemberModule, AuthModule, PrismaModule],
  controllers: [],
  providers: [AppService]
})
export class AppModule {}