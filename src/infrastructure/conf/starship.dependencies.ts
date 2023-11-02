import { StarshipController } from '@adapters/express/controller/starship.controller'
import { StarshipModel, StarshipMongo } from '@adapters/mongo/starship.mongo'
import { StarshipService } from '@app/starship/starship.service'

const repo = new StarshipMongo(StarshipModel)
export const starshipService = new StarshipService(repo)
export const starshipController = new StarshipController(starshipService)
