import { Body, Controller, Get, Post, Request, Res, UseGuards } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth-guard.guard";
import { CreateUserRequestDto } from "./dtos/create-user.request.dto";
import { LoginUserRequestDto } from "./dtos/login-user.request.dto";
import { AUTH_COOKIE_TOKEN } from "../../core/constants/auth.constants";

@Controller("auth")
export class AuthController {

    constructor(private readonly authService: AuthService,
                private readonly configService: ConfigService) {
    }


    @Post("register")
    async registerNewUser(@Body() createUserDto: CreateUserRequestDto): Promise<boolean> {
        return await this.authService.createNewUser(createUserDto);
    }

    @UseGuards(LocalAuthGuard)
    @Post("login")
    async loginUser(@Body() credentials: LoginUserRequestDto, @Request() req, @Res({ passthrough: true }) res: Response) {
        const token = await this.authService.generateJwtToken(req.user);
        res.cookie(AUTH_COOKIE_TOKEN, token, {
            httpOnly: true,
            maxAge: this.configService.get<number>("APP_AUTH_JWT_COOKIE_MAXAGE")
        });
        // TODO: IMPLEMENT REFRESH TOKEN https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/
        // https://github.com/Naveen512/nestjs-jwt-cookie-auth/blob/master/src/users/refresh.strategy.ts
        return {
            access_token: token
        };
    }


    @Get("logout")
    async logout(@Res({ passthrough: true }) res) {
        res.cookie(AUTH_COOKIE_TOKEN, "", { expires: new Date() });
    }

}
