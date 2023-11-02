import { planetController } from '@conf/planet.dependencies'
import { Router } from 'express'

export const planetRouter = Router()

planetRouter.get('/', planetController.get)
