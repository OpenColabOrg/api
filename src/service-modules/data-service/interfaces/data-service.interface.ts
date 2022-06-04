import { IGenericRepository } from "./generic-repository.interface";
import { User } from "../../../core/entities/user";
import { Page } from "../../../core/entities/page";
import { Tag } from "../../../core/entities/tag";
import { IUserRepository } from "./user-repository.interface";

export abstract class IDataService {
    abstract users: IUserRepository;
    abstract pages: IGenericRepository<Page>;
    abstract tags: IGenericRepository<Tag>;
}