import { NextApiRequest, NextApiResponse } from 'next'
import { api } from '~/api/server'

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query
    const selected = api.server.users.getUser(id as string)

    res.status(200).json(selected)
  } catch (err) {
    res.status(404).json({ statusCode: 404, message: err.message })
  }
}
