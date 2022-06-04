import { BadRequestException, Injectable } from "@nestjs/common";
import { IDocumentsService } from "./documents.service.interface";
import { IDataService } from "../../../service-modules/data-service/interfaces";
import { Document } from "../../../core/entities/document";
import { isUUID } from "@nestjs/common/utils/is-uuid";

@Injectable()
export class DocumentsService implements IDocumentsService {

    constructor(protected readonly dataService: IDataService) {
    }

    getDocumentById(id: string): Promise<Document> {
        if(!isUUID(id))
        {
            throw new BadRequestException("Invalid UUID")
        }
        return this.dataService.documents.findOneById(id);
    }
}
