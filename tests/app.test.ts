import { describe, expect, test } from '@jest/globals'
import request from 'supertest'
import { serverExpress } from '../src/infrastructure/adapters/express/express-server'
import { mongoConf } from '../src/infrastructure/conf/mongoConf'

let mongo = mongoConf(
  'mongodb://admin:admin@localhost:27017/digi?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
)

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
