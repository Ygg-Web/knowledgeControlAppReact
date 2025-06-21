import { BaseRepositoryItem, ServiceItem } from "../interfaces/base";

export abstract class BaseService<T> implements ServiceItem<T> {
  constructor(protected repository: BaseRepositoryItem<T>) {}

  abstract getAll(): Promise<T[]>;
  abstract getById(id: string): Promise<T>;
}