import { Router } from 'express'
import {
  handleVipsGet,
  handleVipsPost,
  handleVipsPatchArrived,
} from '../controllers/vips.controller'

const vipsRoute = () => {
  const router = Router()

  router.get('/', (req, res) => handleVipsGet(req, res))
  // router.get('/:id', (req, res) => handleVipsGetById(req, res))
  router.post('/', (req, res) => handleVipsPost(req, res))
  // router.put('/:id', (req, res) => handleVipsPost(req, res, db))
  router.patch('/:id/arrived', (req, res) => handleVipsPatchArrived(req, res))

  return router
}

export default vipsRoute
