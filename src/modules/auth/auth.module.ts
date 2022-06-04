import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { ConfigModule } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtConfigService } from "./services/jwt-config.service";
import { DataServiceModule } from "../../service-modules/data-service/data-service.module";
import { LocalStrategy } from "./strategies/local.strategy";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
    imports: [ConfigModule,
        DataServiceModule,
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useClass: JwtConfigService
        })],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {
}
