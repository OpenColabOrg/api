import { Injectable } from "@nestjs/common";
import { IDataService } from "../../../service-modules/data-service/interfaces";
import { IGenericRepository } from "../../../service-modules/data-service/interfaces/generic-repository.interface";
import { Page } from "./entities/page.entity";
import { Tag } from "./entities/tag.entity";
import { EntityManager } from "typeorm";
import { GenericRepository } from "./repositories/generic.repository";
import { IUserRepository } from "../../../service-modules/data-service/interfaces/user-repository.interface";
import { UserRepository } from "./repositories/user.repository";

@Injectable()
export class TypeormDataService implements IDataService {
    tags: IGenericRepository<Tag>;
    pages: IGenericRepository<Page>;
    users: IUserRepository;

    constructor(protected readonly entityManager: EntityManager) {
        this.tags = new GenericRepository(entityManager.getRepository(Tag));
        this.pages = new GenericRepository(entityManager.getRepository(Page));
        this.users = new UserRepository(entityManager);
    }

}
