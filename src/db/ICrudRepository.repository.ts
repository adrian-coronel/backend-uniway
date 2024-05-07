export interface ICrudRepository <T> {
  findAll: () => Promise<T[]>;
  findById: (id: number) => Promise<T | null>;
  create: (entity: T) => Promise<void>;
  update: (id: number, entity: Partial<T>) => Promise<void>;
  delete: (id: number) => Promise<void>;
}