import { AppService } from '@app/service'
import { Request, Response } from 'express'

type query = { [key: string]: string }

export class AppController<T> {
  constructor(private readonly service: AppService<T>) {}

  get = async (req: Request, res: Response) => {
    try {
      const params: query = req.query as query

      if (params) {
        return res.json(await this.getByAttr(params))
      }

      res.json(await this.service.getAll())
    } catch (error) {
      res.json('ERROR')
    }
  }

  private async getByAttr(attr: query) {
    return await this.service.getByAttr(attr)
  }
}
