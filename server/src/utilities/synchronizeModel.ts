import { VIP } from '../models/vip'

// automatically generate table in database based from given model
// remove force parameter to disable re-create table every time
// server restarted

export const synchronizeModel = async () => {
  try {
    await VIP.sync({ force: true })
    console.log('VIP model were synchronized successfully.')
  } catch (err) {
    console.log('VIP model failed to synchronized, reason:' + err)
  }
}
