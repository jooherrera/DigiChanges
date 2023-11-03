import { SyncUp } from './sync-up'
import { AppService } from '@app/service'

export class SyncPort<T> implements SyncUp<T> {
  constructor(private readonly name: string, private readonly service: AppService<T>) {}

  async startSync(elem: T): Promise<void> {
    try {
      await this.service.add(elem)
    } catch (error: any) {
      console.log(`Falla en la sincronización.`)
      console.log(error.message)
    }
  }

  getTaskName() {
    return `${this.name}`
  }
}
