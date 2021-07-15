import { createResponseBody } from './../utilities/createResponseBody'
import { Sequelize } from 'sequelize'
import { Request, Response } from 'express'
import { VIP } from '../models/vip'

export const handleVipsGet = (req: Request, res: Response, db: Sequelize) => {
  VIP.findAll()
    .then((vips) => {
      res
        .status(200)
        .json(createResponseBody({ ok: true, data: vips, message: 'success' }))
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json(
        createResponseBody({
          ok: false,
          message: 'failed to get vips, reason: ' + err,
        })
      )
    })
}

export const handleVipsPost = (req: Request, res: Response, db: Sequelize) => {
  try {
    const { name, country_of_origin, eta, photo, attributes } = req.body
    VIP.create({ name, country_of_origin, eta, photo, attributes }).then(
      (vip) =>
        res
          .status(200)
          .json(createResponseBody({ ok: true, message: 'success adding vip' }))
    )
  } catch (err) {
    console.log('error occurred: ' + err)
    res.status(400).json(
      createResponseBody({
        ok: false,
        message: 'failed to add vip, reason: ' + err,
      })
    )
  }
}

export const handleVipsPatch = (req: Request, res: Response, db: Sequelize) => {
  try {
    const { id, arrived } = req.body
    VIP.update(
      { arrived },
      {
        where: {
          id: id,
        },
      }
    ).then((vip) =>
      res
        .status(200)
        .json(createResponseBody({ ok: true, message: 'success patching vip' }))
    )
  } catch (err) {
    console.log('error occurred: ' + err)
    res.status(400).json(
      createResponseBody({
        ok: false,
        message: 'failed to add vip, reason: ' + err,
      })
    )
  }
}
