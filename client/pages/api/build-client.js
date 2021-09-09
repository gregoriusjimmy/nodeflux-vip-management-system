import axios from 'axios'
import { SERVER_HOST } from '../../constant'

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    return axios.create({
      baseURL: `http://${SERVER_HOST}:5000`,
      headers: req.headers,
      withCredentials: true,
    })
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/',
    })
  }
}
