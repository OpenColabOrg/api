import { DeepPartial } from "typeorm";

export abstract class IGenericRepository<T> {
    abstract findOneById(id: string): Promise<T>;

    abstract save<U extends DeepPartial<T>>(item: U): Promise<T>;
}