import { Controller, Get, Param } from "@nestjs/common";
import { Page } from "../../../core/entities/page";
import { IPageService } from "../services/page.service.interface";

@Controller("documents")
export class PageController {

    constructor(protected readonly documentService: IPageService) {
    }

    @Get(":id")
    async getDocumentById(@Param("id") id: string): Promise<Page> {
        return this.documentService.getDocumentById(id);
    }
}
