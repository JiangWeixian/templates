import { client } from './client'
import { Users } from '~/interfaces'

export const users = {
  async list(): Promise<Users.Item[]> {
    return client.get('/users')
  },
  async getUser(id: string): Promise<Users.Item> {
    return client.get(`/users/${id}`)
  },
}
