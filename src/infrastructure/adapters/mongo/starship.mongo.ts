import mongoose, { Model, Schema } from 'mongoose'
import { MongoRepository } from './mongo-repository'
import { Starship } from '@entity/starship'

const StarshipSchema = new Schema<Starship>(
  {
    name: String,
    model: String,
    manufacturer: String,
    cost_in_credits: String,
    length: String,
    max_atmosphering_speed: String,
    crew: String,
    passengers: String,
    cargo_capacity: String,
    consumables: String,
    hyperdrive_rating: String,
    MGLT: String,
    starship_class: String,
    pilots: [String],
    films: [String],
    created: String,
    edited: String,
    url: { type: String, unique: true },
  },
  { timestamps: true }
)

export const StarshipModel = mongoose.model('Starship', StarshipSchema)

export class StarshipMongo extends MongoRepository<Starship> {
  constructor(model: Model<Starship>) {
    super(model)
  }
}
