import { Repository } from '@entity/repository'

export abstract class AppService<T> {
  private readonly perPage: number
  constructor(private readonly repo: Repository<T>) {
    this.perPage = 10
  }

  async add(elem: Partial<T>): Promise<T | null> {
    return await this.repo.add(elem)
  }

  async getAll(): Promise<T[] | null> {
    return await this.repo.getAll()
  }

  async getByAttr(attr: { [key: string]: string }): Promise<T[] | null> {
    return await this.repo.getByAttr(attr)
  }

  async getPage(page: number) {
    if (page < 1) return []
    return await this.repo.getPaginated(page, this.perPage)
  }
}
