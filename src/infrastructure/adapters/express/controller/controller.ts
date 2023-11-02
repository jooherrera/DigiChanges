import { AppService } from '@app/service'
import { Request, Response } from 'express'

type query = { [key: string]: string }

export class AppController<T> {
  constructor(private readonly service: AppService<T>) {}

  get = async (req: Request, res: Response) => {
    try {
      const querys: query = req.query as query

      if (this.isEmpty(querys)) {
        return res.json(await this.paginate(1))
      }

      if (querys.page) {
        return res.json(await this.paginate(Number(req.query.page)))
      }

      if (querys) {
        return res.json(await this.getByAttr(querys))
      }
    } catch (error: any) {
      console.log(error.message)
      res.status(500).json('Error interno')
    }
  }

  private async getByAttr(attr: query) {
    return await this.service.getByAttr(attr)
  }

  private async paginate(page: number) {
    return await this.service.getPage(page)
  }

  private isEmpty(obj: any) {
    return Object.keys(obj).length === 0
  }
}
