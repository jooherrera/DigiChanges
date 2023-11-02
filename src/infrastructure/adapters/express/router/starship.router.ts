import { starshipController } from '@conf/starship.dependencies'
import { Router } from 'express'

export const starshipRouter = Router()

starshipRouter.get('/', starshipController.get)
