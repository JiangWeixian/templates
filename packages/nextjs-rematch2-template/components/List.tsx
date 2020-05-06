import * as React from 'react'
import ListItem from './ListItem'
import { Users } from '~/interfaces'

type Props = {
  items: Users.Item[]
}

const List: React.FunctionComponent<Props> = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
