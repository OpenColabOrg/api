import { BadRequestException, Injectable } from "@nestjs/common";
import { IPageService } from "./page.service.interface";
import { IDataService } from "../../../service-modules/data-service/interfaces";
import { Page } from "../../../core/entities/page";
import { isUUID } from "@nestjs/common/utils/is-uuid";

@Injectable()
export class PageService implements IPageService {

    constructor(protected readonly dataService: IDataService) {
    }

    getDocumentById(id: string): Promise<Page> {
        if(!isUUID(id))
        {
            throw new BadRequestException("Invalid UUID")
        }
        return this.dataService.pages.findOneById(id);
    }
}
