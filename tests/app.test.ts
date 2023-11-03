import { describe, expect, test } from '@jest/globals'
import request from 'supertest'
import { serverExpress } from '../src/infrastructure/adapters/express/express-server'
import { mongoConf } from '../src/infrastructure/conf/mongoConf'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: `${path.resolve()}/.env.test` })

let mongo = mongoConf(process.env.URI!)

beforeAll(async () => {
  await mongo.connect()
})

afterAll(async () => {
  await mongo.close()
})

describe('Test API', () => {
  describe('People', () => {
    test('Deberia responder 200 - ', async () => {
      const response = await request(serverExpress).get('/api/v1/people')
      expect(response.status).toBe(200)
    })
  })
  describe('Films', () => {
    test('Deberia responder 200 - ', async () => {
      const response = await request(serverExpress).get('/api/v1/films')
      expect(response.status).toBe(200)
    })
  })
  describe('Planets', () => {
    test('Deberia responder 200 - ', async () => {
      const response = await request(serverExpress).get('/api/v1/planets')
      expect(response.status).toBe(200)
    })
  })
  describe('Starships', () => {
    test('Deberia responder 200 - ', async () => {
      const response = await request(serverExpress).get('/api/v1/starships')
      expect(response.status).toBe(200)
    })
  })
  test('Deberia responder 404 - Not Found', async () => {
    const response = await request(serverExpress).get('/prueba')
    expect(response.status).toBe(404)
  })

  test('Deberia tener como máximo 10 elementos', async () => {
    const response = await request(serverExpress).get('/api/v1/people')
    expect(response.body).toBeDefined()
    expect(response.body.length).toBeLessThanOrEqual(10)
  })
})
