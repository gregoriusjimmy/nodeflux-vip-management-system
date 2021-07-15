import { Request, Response, NextFunction } from 'express'

const SECRET_KEY: string = 'stafftoken'
const ACCOUNT_NAME: string = 'staffusername'

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const username = req.query.username
  const password = req.query.password

  if (username && password) {
    if (username === ACCOUNT_NAME && password === SECRET_KEY) {
      next()
    } else {
      return res.status(400).json('authentication failed')
    }
  } else {
    return res.status(400).json('not verified')
  }
}
