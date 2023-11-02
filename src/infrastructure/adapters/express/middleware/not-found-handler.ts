import { NextFunction, Request, Response } from 'express'

export function notFoundHandler(req: Request, res: Response, next: NextFunction) {
  return res.status(404).json({ message: 'Recurso no encontrado' }).end()
}
