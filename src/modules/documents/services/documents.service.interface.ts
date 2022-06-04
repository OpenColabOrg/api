import { Document } from "../../../core/entities/document";

export abstract class IDocumentsService {
    abstract getDocumentById(id: string): Promise<Document>
}