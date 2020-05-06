import { Users } from '~/interfaces'
import { server } from './server'

export const users = {
  async list(): Promise<Users.Item[]> {
    return server.get('/users')
  },
  async getUser(id: string): Promise<Users.Item> {
    return server.get(`/users/${id}`)
  },
}
