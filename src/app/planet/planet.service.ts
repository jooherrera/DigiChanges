import { AppService } from '@app/service'
import { Planet } from '@entity/planet'
import { Repository } from '@entity/repository'

export class PlanetService extends AppService<Planet> {
  constructor(planetRepo: Repository<Planet>) {
    super(planetRepo)
  }
}
