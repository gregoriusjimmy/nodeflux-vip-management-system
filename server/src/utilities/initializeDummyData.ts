import { VIP } from '../models/vip'

export const initializeDummyData = async () => {
  try {
    await VIP.create({
      name: 'Taufik Hidayat',
      country_of_origin: 'Indonesia',
      eta: new Date(),
      photo:
        'https://staticg.sportskeeda.com/wp-content/uploads/2012/02/taufik-hidayat.jpg',
      attributes: ['red jacket indonesian team', 'blue jeans'],
    })
    await VIP.create({
      name: 'Gregorius Jimmy',
      country_of_origin: 'Hongkong',
      eta: new Date(Date.now() - 1000 * 60 * 30), // minus 30 minutes

      attributes: ['red jacket hongkong team', 'red jeans'],
    })
    await VIP.create({
      name: 'Uzumaki Jimmy',
      country_of_origin: 'Japan',
      eta: new Date(Date.now() - 1000 * 60 * 60), // minus 60 minutes

      attributes: ['bento', 'red nipon headband'],
    })
    console.log('Initialize dummy data succeeded')
  } catch (err) {
    console.log('Failed to initialize dummy data, reason: ' + err)
  }
}
