export interface Repository<T> {
  add(elem: Partial<T>): Promise<T | null>
  getAll(): Promise<T[]>
  getByAttr(attributes: { [key: string]: string }): Promise<T[] | null>
  getPaginated(page: number, perPage: number): Promise<T[] | null>
}
