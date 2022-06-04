import { Page } from "../../../core/entities/page";

export abstract class IPageService {
    abstract getDocumentById(id: string): Promise<Page>
}