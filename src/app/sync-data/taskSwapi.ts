import { ExternalError } from '@app/Error/error'
import { SyncUp } from './sync-up'

export class TaskSwapi<T> implements SyncUp<T> {
  private name: string
  constructor(private readonly resource: string) {
    this.name = 'TaskSwapi'
  }
  async run() {
    try {
      const response = await fetch(`https://swapi.dev/api/${this.resource}`)
      if (!response.ok) throw new ExternalError('No se pudo obtener los datos de la API externa')
      const data = await response.json()
      return data.results
    } catch (error: any) {
      console.log(`Falla en la sincronización: ${this.resource}`)
      console.log(error.message)
      return null
    }
  }

  getTaskName() {
    return `${this.name} - ${this.resource}`
  }
}
