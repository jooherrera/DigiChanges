import { People } from '@entity/people'
import { AppController } from './controller'
import { AppService } from '@app/service'

export class PeopleController extends AppController<People> {
  constructor(service: AppService<People>) {
    super(service)
  }
}
