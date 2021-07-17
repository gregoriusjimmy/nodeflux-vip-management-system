import { Request, Response } from 'express'
import { SECRET_TOKEN, STAFF_USERNAME } from '../config/constants'
import { createResponseBody } from '../utilities/createResponseBody'

const MAX_AGE = 1 * 60 * 60

export const handleLoginPost = (req: Request, res: Response) => {
  const { username, password } = req.body
  if (username === STAFF_USERNAME && password === SECRET_TOKEN) {
    res.cookie('token', SECRET_TOKEN, {
      httpOnly: true,
      maxAge: MAX_AGE * 1000,
    })
    res.status(200).json(createResponseBody({ ok: true, message: 'success' }))
  } else
    res
      .status(400)
      .json(
        createResponseBody({ ok: false, message: 'wrong username or password' })
      )
}
