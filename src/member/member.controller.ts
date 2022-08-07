import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GetMember } from "src/decorator";
import { StrategyKey } from "src/types";
import { IMember } from "src/types/member.type";
import { MemberService } from "./member.service";

@Controller('member')
export class MemberController {

    constructor(
        private memberService: MemberService
    ) {}

    @UseGuards(AuthGuard(StrategyKey.JWT))
    @Get("detail")
    public getMemberDetail(@GetMember() member: IMember) {
        return this.memberService.getMemberDetail(member.memberId);
    }

}