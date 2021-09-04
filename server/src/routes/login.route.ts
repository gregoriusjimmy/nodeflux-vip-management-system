import { Router } from 'express'
import { handleLoginPost } from '../controllers/login.controller'

const loginRoute = () => {
  const router = Router()

  router.post('/', (req, res) => handleLoginPost(req, res))

  return router
}

export default loginRoute
