import { peopleController } from '@conf/people.dependencies'
import { Router } from 'express'

export const peopleRouter = Router()

peopleRouter.get('/', peopleController.get)
