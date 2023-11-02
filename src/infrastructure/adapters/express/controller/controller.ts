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
    } catch (error: any) {
      console.log(error.message)
      res.status(500).json('Error interno')
    }
  }

  private async getByAttr(attr: query) {
    return await this.service.getByAttr(attr)
  }
}
