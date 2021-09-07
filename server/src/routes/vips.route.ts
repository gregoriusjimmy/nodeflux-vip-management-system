import { Router } from 'express'
import {
  handleVipsGet,
  handleVipsGetById,
  handleVipsPost,
  handleVipsPut,
  handleVipsPatchArrived,
} from '../controllers/vips.controller'

const vipsRoute = () => {
  const router = Router()

  router.get('/', (req, res) => handleVipsGet(req, res))
  router.get('/:id', (req, res) => handleVipsGetById(req, res))
  router.post('/', (req, res) => handleVipsPost(req, res))
  router.put('/:id', (req, res) => handleVipsPut(req, res))
  router.patch('/:id/arrived', (req, res) => handleVipsPatchArrived(req, res))

  return router
}

export default vipsRoute
