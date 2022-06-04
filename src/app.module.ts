import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { DataServiceModule } from "./service-modules/data-service/data-service.module";
import { ModulesModule } from './modules/modules.module';

@Module({
    imports: [ConfigModule.forRoot(),
        ModulesModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}
