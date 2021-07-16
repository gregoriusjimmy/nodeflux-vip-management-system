import { Request, Response } from 'express'
import { SECRET_TOKEN, STAFF_USERNAME } from '../config/constants'

const MAX_AGE = 1 * 60 * 60

export const handleLoginPost = (req: Request, res: Response) => {
  const { username, password } = req.body
  if (username === STAFF_USERNAME && password === SECRET_TOKEN) {
    res.cookie('token', SECRET_TOKEN, {
      httpOnly: true,
      maxAge: MAX_AGE * 1000,
    })
    res.status(200).json('login successful')
  } else res.status(400).json('wrong username or password')
}
