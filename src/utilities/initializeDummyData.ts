import { VIP } from '../models/vip'

export const initializeDummyData = async () => {
  try {
    await VIP.create({
      name: 'Taufik Hidayat',
      country_of_origin: 'Indonesia',
      eta: Date.now(),
      photo:
        'https://staticg.sportskeeda.com/wp-content/uploads/2012/02/taufik-hidayat.jpg',
      attributes: ['red jacket indonesian team', 'blue jeans'],
    })
    console.log('Initialize dummy data succeeded')
  } catch (err) {
    console.log('Failed to initialize dummy data, reason: ' + err)
  }
}
