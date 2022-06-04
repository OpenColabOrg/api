import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { DataServiceModule } from "./service-modules/data-service/data-service.module";

@Module({
    imports: [ConfigModule.forRoot(),
        DataServiceModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}
