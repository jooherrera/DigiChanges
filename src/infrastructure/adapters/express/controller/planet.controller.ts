import { Planet } from '@entity/planet'
import { AppController } from './controller'
import { AppService } from '@app/service'

export class PlanetController extends AppController<Planet> {
  constructor(service: AppService<Planet>) {
    super(service)
  }
}
