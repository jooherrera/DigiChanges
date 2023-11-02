import { PeopleService } from '@app/people/people.service'
import { PeopleController } from '@adapters/express/controller/people.controller'
import { PeopleMongo, peopleModel } from '@adapters/mongo/people.mongo'

const repo = new PeopleMongo(peopleModel)
export const peopleService = new PeopleService(repo)
export const peopleController = new PeopleController(peopleService)
