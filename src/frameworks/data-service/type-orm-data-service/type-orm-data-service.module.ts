import { Module } from "@nestjs/common";
import { TypeormDataService } from "./typeorm-data-service.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmConfigService } from "./typeorm-config.service";

@Module({
    imports: [TypeOrmModule.forRootAsync({
        useClass: TypeOrmConfigService,
        imports: [ConfigModule]
    })],
    providers: [TypeormDataService]
})
export class TypeOrmDataServiceModule {
}
