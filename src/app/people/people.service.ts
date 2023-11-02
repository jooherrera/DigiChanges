import { AppService } from '@app/service'
import { People } from '@entity/people'
import { Repository } from '@entity/repository'

export class PeopleService extends AppService<People> {
  constructor(peopleRepo: Repository<People>) {
    super(peopleRepo)
  }
}
