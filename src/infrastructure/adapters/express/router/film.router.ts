import { filmController } from '@conf/film.dependencies'
import { Router } from 'express'

export const filmRouter = Router()

filmRouter.get('/', filmController.get)
