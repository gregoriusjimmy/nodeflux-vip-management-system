import { createResponseBody } from './../utilities/createResponseBody'
import { Request, Response } from 'express'
import { VIP } from '../models/vip'

export const handleVipsGet = async (req: Request, res: Response) => {
  try {
    const vips = await VIP.findAll()
    res
      .status(200)
      .json(createResponseBody({ ok: true, data: vips, message: 'success' }))
  } catch (err) {
    console.error(err)
    res.status(400).json(
      createResponseBody({
        ok: false,
        message: 'failed to get vips, reason: ' + err,
      })
    )
  }
}

export const handleVipsGetById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const vip = await VIP.findByPk(id)
    res
      .status(200)
      .json(createResponseBody({ ok: true, data: vip, message: 'success' }))
  } catch (err) {
    console.error(err)
    res.status(400).json(
      createResponseBody({
        ok: false,
        message: 'failed to get vips, reason: ' + err,
      })
    )
  }
}

export const handleVipsPost = async (req: Request, res: Response) => {
  try {
    const { name, country_of_origin, eta, arrived, photo, attributes } =
      req.body
    await VIP.create({
      name,
      country_of_origin,
      eta,
      arrived,
      photo,
      attributes,
    })
    res
      .status(200)
      .json(createResponseBody({ ok: true, message: 'success adding vip' }))
  } catch (err) {
    console.error(err)
    res.status(400).json(
      createResponseBody({
        ok: false,
        message: 'failed to add vip, reason: ' + err,
      })
    )
  }
}

export const handleVipsPut = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const { name, country_of_origin, eta, arrived, photo, attributes } =
      req.body
    await VIP.update(
      {
        name,
        country_of_origin,
        arrived,
        eta,
        photo,
        attributes,
      },
      { where: { id: id } }
    )
    res
      .status(200)
      .json(createResponseBody({ ok: true, message: 'success modifying vip' }))
  } catch (err) {
    console.error(err)
    res.status(400).json(
      createResponseBody({
        ok: false,
        message: 'failed to modify vip, reason: ' + err,
      })
    )
  }
}

export const handleVipsPatchArrived = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const { arrived } = req.body
    if (!arrived) throw Error('arrived cannot be empty')
    await VIP.update({ arrived: arrived }, { where: { id: id } })
    res
      .status(200)
      .json(createResponseBody({ ok: true, message: 'success patching vip' }))
  } catch (err) {
    console.error(err)
    res.status(400).json(
      createResponseBody({
        ok: false,
        message: 'failed to patch vip, reason: ' + err,
      })
    )
  }
}
