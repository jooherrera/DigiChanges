import { CronScheduler } from '@adapters/cron/cronScheduler'
import { TaskSwapi } from '@app/sync-data/taskSwapi'
import { People } from '@entity/people'
import { peopleService } from './people.dependencies'
import { filmService } from './film.dependencies'
import { planetService } from './planet.dependencies'
import { starshipService } from './starship.dependencies'
import { FetchRequest } from '@adapters/http/fetch-request'
import { SyncPort } from '@app/sync-data/sync-port'
import { Film } from '@entity/film'
import { Planet } from '@entity/planet'
import { Starship } from '@entity/starship'

export const peopleSync = new SyncPort<People>('people', peopleService)
export const filmsSync = new SyncPort<Film>('films', filmService)
export const planetsSync = new SyncPort<Planet>('planets', planetService)
export const starshipsSync = new SyncPort<Starship>('starships', starshipService)

const http = new FetchRequest()
export const cronScheduler = new CronScheduler(http)

cronScheduler.run('https://swapi.dev/api/people', peopleSync)
cronScheduler.run('https://swapi.dev/api/films', filmsSync)
cronScheduler.run('https://swapi.dev/api/planets', planetsSync)
cronScheduler.run('https://swapi.dev/api/starships', starshipsSync)
