import axios from 'axios'
import { HOST } from '~/interfaces'

export const client = axios.create()
client.defaults.baseURL = process.env.NODE_ENV === 'development' ? HOST.DEV_CLIENT : HOST.CLIENT
client.interceptors.response.use(
  async res => {
    return res.data
  },
  (err: any) => Promise.reject(err),
)
