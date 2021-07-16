import { STAFF_USERNAME, SECRET_TOKEN } from './../config/constants'
import { Request, Response, NextFunction } from 'express'

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // it is possible to implement jwt here
  const username = req.query.username
  const password = req.query.password
  if (username && password) {
    if (username === STAFF_USERNAME && password === SECRET_TOKEN) {
      next()
    } else {
      return res.status(400).json('authentication failed')
    }
  } else {
    return res.status(400).json('not verified')
  }
}
