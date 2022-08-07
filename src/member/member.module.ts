import { Module } from '@nestjs/common';
import { JwtStrategy } from 'src/auth/strategy';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';

@Module({
    providers: [MemberService, JwtStrategy],
    controllers: [MemberController]
})
export class MemberModule {}
