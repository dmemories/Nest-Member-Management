import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MemberModule, AuthModule],
  controllers: [],
  providers: [AppService]
})
export class AppModule {}