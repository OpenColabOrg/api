import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from "express";
import { AUTH_COOKIE_TOKEN } from "../../../core/constants/auth.constants";
import { AuthUserData } from "../../../core/types/auth-user-data.type";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                JwtStrategy.extractJWT,
                ExtractJwt.fromAuthHeaderAsBearerToken()
            ]),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>("APP_AUTH_JWT_SECRET")
        });
    }

    private static extractJWT(req: Request): string | null {
        const data = req?.cookies[AUTH_COOKIE_TOKEN];
        if (!data) {
            return null;
        }
        return data;
    }

    async validate(payload: any): Promise<AuthUserData> {
        return { id: payload.sub };
    }
}
