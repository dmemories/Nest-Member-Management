import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto, SignUpDto } from "./dto/auth.dto";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post("/signup")
    public async signup(@Body() dto: SignUpDto) {
        const result = await this.authService.signup(dto);
        return result;
    }

    @Post("/signin")
    public signin(@Body() dto: SignInDto) {
        return this.authService.signin(dto);
    }

}