import { People } from '@entity/people'
import mongoose, { Model, Schema } from 'mongoose'
import { MongoRepository } from './mongo-repository'

const PeopleSchema = new Schema<People>(
  {
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: String,
    films: [String],
    species: [String],
    vehicles: [String],
    starships: [String],
    created: Date,
    edited: Date,
    url: { type: String, unique: true },
  },
  { timestamps: true }
)

export const peopleModel = mongoose.model('People', PeopleSchema)

export class PeopleMongo extends MongoRepository<People> {
  constructor(model: Model<People>) {
    super(model)
  }
}
