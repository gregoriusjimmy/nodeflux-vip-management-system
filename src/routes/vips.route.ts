import { Sequelize } from 'sequelize'
import { Router } from 'express'
import {
  handleVipsGet,
  handleVipsPost,
  handleVipsPatch,
} from '../controllers/vips.controller'

const vipsRoute = (db: Sequelize) => {
  const router = Router()

  router.get('/', (req, res) => handleVipsGet(req, res, db))
  router.post('/', (req, res) => handleVipsPost(req, res, db))
  router.patch('/', (req, res) => handleVipsPatch(req, res, db))

  return router
}

export default vipsRoute
