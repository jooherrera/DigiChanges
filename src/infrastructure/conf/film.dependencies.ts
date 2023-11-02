import { FilmController } from '@adapters/express/controller/film.controller'
import { FilmModel, FilmMongo } from '@adapters/mongo/film.mongo'
import { FilmService } from '@app/film/film.service'

const repo = new FilmMongo(FilmModel)
export const filmService = new FilmService(repo)
export const filmController = new FilmController(filmService)
