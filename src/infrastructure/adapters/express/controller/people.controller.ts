import { People } from '@entity/people'
import { AppController } from './controller'
import { AppService } from '@app/service'

export class peopleController extends AppController<People> {
  constructor(service: AppService<People>) {
    super(service)
  }
}
