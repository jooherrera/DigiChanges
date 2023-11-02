import { Film } from '@entity/film'
import { AppController } from './controller'
import { AppService } from '@app/service'

export class FilmController extends AppController<Film> {
  constructor(service: AppService<Film>) {
    super(service)
  }
}
