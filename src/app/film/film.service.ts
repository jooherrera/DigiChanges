import { AppService } from '@app/service'
import { Film } from '@entity/film'
import { Repository } from '@entity/repository'

export class FilmService extends AppService<Film> {
  constructor(filmRepo: Repository<Film>) {
    super(filmRepo)
  }
}
