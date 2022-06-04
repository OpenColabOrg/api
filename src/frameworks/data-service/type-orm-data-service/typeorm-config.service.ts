import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: "postgres",
            host: this.configService.get<string>("PGSQL_HOSTNAME"),
            port: this.configService.get<number>("PGSQL_PORT", 5432),
            username: this.configService.get<string>("PGSQL_USER"),
            password: this.configService.get<string>("PGSQL_PASS"),
            database: this.configService.get<string>("PGSQL_DB"),

            // TODO: this shit should not be done in production. Migrations should be used
            entities: [__dirname + "/**/*.entity{.ts,.js}"],
            synchronize: true,
            logging: true,
        };
    }
}
