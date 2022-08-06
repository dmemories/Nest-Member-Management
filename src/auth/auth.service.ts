import { ForbiddenException, Injectable } from "@nestjs/common";
import * as argon from "argon2";
import { PrismaService } from "src/prisma/prisma.service";
import { SignInDto, SignUpDto } from "./dto";

@Injectable()
export class AuthService {

    constructor(private prismaService: PrismaService) {}

    public async signup(dto: SignUpDto) {
        try {
            const hashPassword = await argon.hash(dto.password);
            const createMember = await this.prismaService.member.create({
                data: {
                    email: dto.email,
                    password: hashPassword,
                    nickname: dto.nickname
                },
            });
            delete createMember.password;
            return createMember;
        } catch (error) {
            if (error?.code === "P2002") {
                throw new ForbiddenException("Credential already taken");
            }
            throw error;
        }
    }

    public async signin(dto: SignInDto) {
        try {
            const member = await this.prismaService.member.findFirst({
                where: { email: dto.email }
            });

            let matchedPassword: boolean;
            if (member) {
                matchedPassword = await argon.verify(member.password, dto.password);
            }
            if (!matchedPassword || !member) {
                throw new ForbiddenException("Credential incorret");
            }

            const { password, createdAt, updatedAt, ...memberResponse } = member;
            return memberResponse;
        } catch (error) {
            throw error;
        }
    }

}