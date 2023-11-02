import { Repository } from '@entity/repository'

export abstract class AppService<T> {
  constructor(private readonly repo: Repository<T>) {}

  async add(elem: Partial<T>): Promise<T | null> {
    return await this.repo.add(elem)
  }

  async getAll(): Promise<T[] | null> {
    return await this.repo.getAll()
  }

  async getByAttr(attr: { [key: string]: string }): Promise<T[] | null> {
    return await this.repo.getByAttr(attr)
  }
}
