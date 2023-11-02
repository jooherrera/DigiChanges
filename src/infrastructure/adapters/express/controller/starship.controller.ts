import { Starship } from '@entity/starship'
import { AppController } from './controller'
import { AppService } from '@app/service'

export class StarshipController extends AppController<Starship> {
  constructor(service: AppService<Starship>) {
    super(service)
  }
}
