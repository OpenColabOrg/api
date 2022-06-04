import { GenericRepository } from "./generic.repository";
import { User } from "../entities/user.entity";
import { IUserRepository } from "../../../../service-modules/data-service/interfaces/user-repository.interface";
import { EntityManager } from "typeorm";

export class UserRepository extends GenericRepository<User> implements IUserRepository {

    constructor(protected readonly entityManger: EntityManager) {
        super(entityManger.getRepository(User));
    }

    findOneByEmail(email: string): Promise<User> {
        return this._repository.findOneBy({ email });
    }

}