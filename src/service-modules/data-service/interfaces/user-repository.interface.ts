import { IGenericRepository } from "./generic-repository.interface";
import { User } from "../../../core/entities/user";

export abstract class IUserRepository extends IGenericRepository<User> {
    abstract findOneByEmail(email: string): Promise<User>;
}