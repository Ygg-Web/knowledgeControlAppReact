import { BaseRepositoryItem } from "../interfaces/base";

export abstract class BaseRepository<T> implements BaseRepositoryItem<T> {
  abstract getAll(id?: number): Promise<T[]>;
  abstract getById(id: number): Promise<T>;
  abstract create(item: Omit<T, "id">): Promise<T>;
  abstract update(id: number, item: Partial<T>): Promise<T>;
  abstract delete(id: number): Promise<void>;
}
