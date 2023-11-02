import { AppService } from '@app/service'
import { SyncUp } from '@app/sync-data/sync-up'
import cron from 'node-cron'

export class CronScheduler<T> {
  run(task: SyncUp<T>, service: AppService<T>) {
    const job = cron.schedule('*/1 * * * *', async () => {
      try {
        const resp = await task.run()
        if (!resp) return
        resp.forEach(async (el) => await service.add(el))
        console.log(`Cargado: ${task.getTaskName()}`)
      } catch (error: any) {
        console.error('Error al realizar la solicitud:', error.message)
      } finally {
        console.log('JobFinalizado')
        job.stop()
      }
    })
  }
}
