import { Module } from "@nestjs/common";
import { PageController } from "./controllers/page.controller";
import { PageService } from "./services/page.service";
import { IPageService } from "./services/page.service.interface";
import { DataServiceModule } from "../../service-modules/data-service/data-service.module";

@Module({
    imports: [DataServiceModule],
    controllers: [PageController],
    providers: [{ provide: IPageService, useClass: PageService }]
})
export class PageModule {
}
