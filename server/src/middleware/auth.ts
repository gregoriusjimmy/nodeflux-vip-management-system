import { STAFF_USERNAME, SECRET_TOKEN } from './../config/constants'
import { Request, Response, NextFunction } from 'express'

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if the user has logged in from client view we use the cookie
  // to do authentication else, we protect the apis with params
  // it is also possible to implement jwt here
  const token = req.cookies.token
  if (token === SECRET_TOKEN) return next()

  // const username = req.query.username
  // const password = req.query.password
  // if (username && password) {
    // if (username === STAFF_USERNAME && password === SECRET_TOKEN) {
    //   return next()
    // } else {
    //   return res.status(400).json('authentication failed')
    // }
  // } else {
  //   return res.status(400).json('not verified')
  // }

  // Using basic authentication instead params for security purposes
  const authHeader = req.headers.authorization;
  if(authHeader){
    let auth = Buffer.from(authHeader.split(' ')[1],'base64').toString().split(':');
    const username = auth[0];
    const password = auth[1];
    if (username === STAFF_USERNAME && password === SECRET_TOKEN) {
      return next()
    } else {
      return res.status(400).json('authentication failed')
    }
  }
  res.set('WWW-Authenticate', 'Basic')
  return res.status(401).send('Authentication required.')
  
}
