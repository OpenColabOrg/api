import { Module } from "@nestjs/common";
import { TypeormDataService } from "./typeorm-data-service.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmConfigService } from "./typeorm-config.service";
import { IDataService } from "../../../service-modules/data-service/interfaces";

@Module({
    imports: [TypeOrmModule.forRootAsync({
        useClass: TypeOrmConfigService,
        imports: [ConfigModule]
    })],
    providers: [{
        provide: IDataService,
        useClass: TypeormDataService
    }],
    exports: [IDataService]
})
export class TypeOrmDataServiceModule {
}
