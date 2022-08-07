import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class MemberService {

    constructor(
        private prismaService: PrismaService
    ) {}

    public async getMemberDetail(memberId: number) {
        try {
            const member = await this.prismaService.member.findFirst({
                where: { id: memberId }
            });
            if (!member) {
                throw new NotFoundException("Member not found");
            }

            delete member.password;
            return { member };
        } catch (error) {
            throw error;
        }
    }

}
