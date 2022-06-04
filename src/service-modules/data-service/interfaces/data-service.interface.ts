import { IGenericRepository } from "./generic-repository.interface";
import { User } from "../../../core/entities/user";
import { Document } from "../../../core/entities/document";
import { Tag } from "../../../core/entities/tag";
import { IUserRepository } from "./user-repository.interface";

export abstract class IDataService {
    abstract users: IUserRepository;
    abstract documents: IGenericRepository<Document>;
    abstract tags: IGenericRepository<Tag>;
}