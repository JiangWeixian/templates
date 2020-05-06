import * as React from 'react'

import { Users } from '../interfaces'

type ListDetailProps = {
  item: Users.Item
}

const ListDetail: React.FunctionComponent<ListDetailProps> = ({ item: user }) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default ListDetail
