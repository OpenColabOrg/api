import { Injectable } from "@nestjs/common";
import { IDataService } from "../../../service-modules/data-service/interfaces";
import { IGenericRepository } from "../../../service-modules/data-service/interfaces/generic-repository.interface";
import { Document } from "./entities/document.entity";
import { User } from "./entities/user.entity";
import { Tag } from "./entities/tag.entity";
import { EntityManager } from "typeorm";
import { GenericRepository } from "./repositories/generic.repository";

@Injectable()
export class TypeormDataService implements IDataService {
    tags: IGenericRepository<Tag>;
    documents: IGenericRepository<Document>;
    users: IGenericRepository<User>;

    constructor(protected readonly entityManager: EntityManager) {
        this.tags = new GenericRepository(entityManager.getRepository(Tag));
        this.documents = new GenericRepository(entityManager.getRepository(Document));
        this.users = new GenericRepository(entityManager.getRepository(User));
    }

}
