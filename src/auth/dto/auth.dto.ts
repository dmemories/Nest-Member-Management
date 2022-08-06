import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class SignInDto {

    @IsNotEmpty()
    @IsEmail()
    @MaxLength(30)
    email: string;

    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    password: string;

}

export class SignUpDto extends SignInDto {

    @IsNotEmpty()
    nickname: string;

}