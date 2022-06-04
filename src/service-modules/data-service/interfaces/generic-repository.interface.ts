export abstract class IGenericRepository<T> {
    abstract findOneById(id: string): Promise<T>;
}