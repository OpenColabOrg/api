import { Controller, Get, Param } from "@nestjs/common";
import { Document } from "../../../core/entities/document";
import { IDocumentsService } from "../services/documents.service.interface";

@Controller("documents")
export class DocumentsController {

    constructor(protected readonly documentService: IDocumentsService) {
    }

    @Get(":id")
    async getDocumentById(@Param("id") id: string): Promise<Document> {
        return this.documentService.getDocumentById(id);
    }
}
