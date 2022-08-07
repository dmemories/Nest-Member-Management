import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IMember, StrategyKey } from "src/types";
import { getJwtSecret } from "src/utils/functions";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, StrategyKey.JWT) {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: getJwtSecret(),
        });
    }

    validate(payload: any): IMember {
        return payload;
    }

}