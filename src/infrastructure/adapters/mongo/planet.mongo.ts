import mongoose, { Model, Schema } from 'mongoose'
import { MongoRepository } from './mongo-repository'
import { Planet } from '@entity/planet'

const PlanetSchema = new Schema<Planet>(
  {
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    population: String,
    residents: [String],
    films: [String],
    created: String,
    edited: String,
    url: { type: String, unique: true },
  },
  { timestamps: true }
)

export const PlanetModel = mongoose.model('Planet', PlanetSchema)

export class PlanetMongo extends MongoRepository<Planet> {
  constructor(model: Model<Planet>) {
    super(model)
  }
}
