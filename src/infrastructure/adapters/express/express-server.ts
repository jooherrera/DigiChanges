import express from 'express'
import cors from 'cors'
import { peopleRouter } from './router/people.router'

export const serverExpress = express()

serverExpress.use(cors())
serverExpress.use(express.json())

serverExpress.get('/', (req, res) => res.json('Home API'))

serverExpress.use('/people', peopleRouter)
