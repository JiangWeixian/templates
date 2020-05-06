import axios from 'axios'
import { HOST } from '~/interfaces'

export const server = axios.create()
server.defaults.baseURL = HOST.SERVER
server.interceptors.response.use(
  async res => {
    return res.data
  },
  (err: any) => Promise.reject(err),
)
