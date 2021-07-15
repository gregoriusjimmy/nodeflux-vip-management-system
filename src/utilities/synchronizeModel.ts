import { VIP } from '../models/vip'

export const synchronizeModel = async () => {
  try {
    await VIP.sync({ force: true })
    console.log('VIP model were synchronized successfully.')
  } catch (err) {
    console.log('VIP model failed to synchronized, reason:' + err)
  }
}
