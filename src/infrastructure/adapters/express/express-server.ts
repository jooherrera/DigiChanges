import express from 'express'
import cors from 'cors'

export const serverExpress = express()

serverExpress.use(cors())
serverExpress.use(express.json())

serverExpress.get('/', (req, res) => res.json('Home API'))
