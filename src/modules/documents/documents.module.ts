import { Module } from "@nestjs/common";
import { DocumentsController } from "./controllers/documents.controller";
import { DocumentsService } from "./services/documents.service";
import { IDocumentsService } from "./services/documents.service.interface";
import { DataServiceModule } from "../../service-modules/data-service/data-service.module";

@Module({
    imports: [DataServiceModule],
    controllers: [DocumentsController],
    providers: [{ provide: IDocumentsService, useClass: DocumentsService }]
})
export class DocumentsModule {
}
