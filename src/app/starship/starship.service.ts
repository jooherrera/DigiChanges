import { AppService } from '@app/service'
import { Repository } from '@entity/repository'
import { Starship } from '@entity/starship'

export class PeopleService extends AppService<Starship> {
  constructor(starshipRepo: Repository<Starship>) {
    super(starshipRepo)
  }
}
