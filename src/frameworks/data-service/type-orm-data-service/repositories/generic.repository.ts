import { IGenericRepository } from "../../../../service-modules/data-service/interfaces/generic-repository.interface";
import { DeepPartial, FindOptionsWhere, Repository } from "typeorm";
import { AbstractEntity } from "../entities/abstract.entity";

export class GenericRepository<T extends AbstractEntity> implements IGenericRepository<T> {

    constructor(protected readonly _repository: Repository<T>) {
    }

    findOneById(id: string): Promise<T> {
        return this._repository.findOneBy({ id } as FindOptionsWhere<T>);
    }

    save<U extends DeepPartial<T>>(item: U): Promise<T> {
        return this._repository.save(item);
    }

}