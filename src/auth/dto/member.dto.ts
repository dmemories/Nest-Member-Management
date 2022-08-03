import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class LoginDto {

    @IsNotEmpty()
    @IsEmail()
    @MaxLength(30)
    email: string;

    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    password: string;

}