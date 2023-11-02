import { CronScheduler } from '@adapters/cron/cronScheduler'
import { TaskSwapi } from '@app/sync-data/taskSwapi'
import { People } from '@entity/people'
import { peopleService } from './people.dependencies'
import { filmService } from './film.dependencies'
import { planetService } from './planet.dependencies'
import { starshipService } from './starship.dependencies'

export const peopleSync = new TaskSwapi<People>('people')
export const filmsSync = new TaskSwapi<People>('films')
export const planetsSync = new TaskSwapi<People>('planets')
export const starshipsSync = new TaskSwapi<People>('starships')
export const cronScheduler = new CronScheduler()

cronScheduler.run(peopleSync, peopleService)
cronScheduler.run(filmsSync, filmService)
cronScheduler.run(planetsSync, planetService)
cronScheduler.run(starshipsSync, starshipService)
