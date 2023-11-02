import { ExternalError } from '@app/Error/error'
import { SyncUp } from './sync-up'

type Resources = 'people' | 'planets' | 'films' | 'starships'

export class TaskSwapi<T> implements SyncUp<T> {
  private name: string
  constructor(private readonly resource: Resources) {
    this.name = 'TaskSwapi'
  }
  async run() {
    try {
      return this.callAPI(`https://swapi.dev/api/${this.resource}`, [])
    } catch (error: any) {
      console.log(`Falla en la sincronización: ${this.resource}`)
      console.log(error.message)
      return null
    }
  }

  getTaskName() {
    return `${this.name} - ${this.resource}`
  }

  private async callAPI(url: string, data: T[]): Promise<T[] | null> {
    const response = await fetch(url)
    if (!response.ok) throw new ExternalError('No se pudo obtener los datos de la API externa')
    const resp: { next: string; results: [] } = await response.json()
    data.push(...resp.results)
    if (resp.next) {
      return this.callAPI(resp.next, data)
    }
    return data
  }
}
