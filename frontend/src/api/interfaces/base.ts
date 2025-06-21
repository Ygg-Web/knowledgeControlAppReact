export interface BaseRepositoryItem<T> {
  getAll(id?: number): Promise<T[]>;
  getById(id: number): Promise<T>;
  create(item: Omit<T, "id">): Promise<T>;
  update(id: number, item: Partial<T>): Promise<T>;
  delete(id: number): Promise<void>;
}

export interface ServiceItem<T> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T>;
}
