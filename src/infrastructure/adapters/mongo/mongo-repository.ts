import { Repository } from '@entity/repository'
import { Model } from 'mongoose'

export class MongoRepository<T extends { url: string }> implements Repository<T> {
  constructor(private readonly model: Model<T>) {}

  async add(doc: T): Promise<T | null> {
    return await this.model.findOneAndUpdate({ url: doc.url }, { $set: { ...doc } }, { upsert: true, new: true })
  }
  async getAll(): Promise<T[]> {
    return await this.model.find().exec()
  }
  async getByAttr(attributes: Partial<{ [key: string]: string }>): Promise<T[] | null> {
    return await this.model.find(attributes).exec()
  }
}
