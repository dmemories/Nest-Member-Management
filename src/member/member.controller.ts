import { Controller } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Controller('member')
export class MemberController {
    constructor(private authService: AuthService) {}
}