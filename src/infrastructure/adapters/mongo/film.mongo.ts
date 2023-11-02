import mongoose, { Model, Schema } from 'mongoose'
import { MongoRepository } from './mongo-repository'
import { Film } from '@entity/film'

const FilmSchema = new Schema<Film>(
  {
    title: String,
    episode_id: Number,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: String,
    characters: [String],
    planets: [String],
    starships: [String],
    vehicles: [String],
    species: [String],
    created: String,
    edited: String,
    url: { type: String, unique: true },
  },
  { timestamps: true }
)

export const FilmModel = mongoose.model('Film', FilmSchema)

export class FilmMongo extends MongoRepository<Film> {
  constructor(model: Model<Film>) {
    super(model)
  }
}
