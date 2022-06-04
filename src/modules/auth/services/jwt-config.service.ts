import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt";

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {

	constructor(private readonly configService: ConfigService) {
	}

	createJwtOptions(): JwtModuleOptions {
		return {
			secret: this.configService.get<string>("APP_AUTH_JWT_SECRET"),
			// TODO: change this value when in production
			signOptions: {expiresIn:'86400s'}
		};
	}
}