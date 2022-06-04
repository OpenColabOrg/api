import { IGenericRepository } from "./generic-repository.interface";
import { User } from "../../../core/entities/user";
import { Document } from "../../../core/entities/document";
import { Tag } from "../../../core/entities/tag";

export abstract class IDataService {
    abstract users: IGenericRepository<User>;
    abstract documents: IGenericRepository<Document>;
    abstract tags: IGenericRepository<Tag>
}