import { PlanetController } from '@adapters/express/controller/planet.controller'
import { PlanetModel, PlanetMongo } from '@adapters/mongo/planet.mongo'
import { PlanetService } from '@app/planet/planet.service'

const repo = new PlanetMongo(PlanetModel)
export const planetService = new PlanetService(repo)
export const planetController = new PlanetController(planetService)
