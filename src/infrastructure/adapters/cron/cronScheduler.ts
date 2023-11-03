import { SyncUp } from '@app/sync-data/sync-up'
import cron from 'node-cron'
import { HTTPRequest } from '../http/http-request'

type RespSWAPI = {
  count: number
  next: string
  previous: string
  results: []
}

export class CronScheduler<T> {
  constructor(private readonly http: HTTPRequest) {}

  run(url: string, sync: SyncUp<T>) {
    cron.schedule('*/3 * * * *', async () => {
      try {
        const resp = await this.getDataFrom(url)
        resp.forEach(async (el) => await sync.startSync(el))
        console.log(`Cargado: ${sync.getTaskName()}`)
        console.log(`JobFinalizado: ${new Date().toLocaleTimeString()}`)
        return true
      } catch (error: any) {
        console.error('Error al realizar la solicitud:', error.message)
        return false
      }
    })
  }

  private async getDataFrom(url: string, data: [] = []): Promise<[]> {
    const resp: RespSWAPI = await this.http.get(url)
    data.push(...resp.results)
    if (resp.next) {
      return this.getDataFrom(resp.next, data)
    }
    return data
  }
}
