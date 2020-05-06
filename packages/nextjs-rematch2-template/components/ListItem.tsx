import * as React from 'react'
import Link from 'next/link'

import { Users } from '~/interfaces'

type Props = {
  data: Users.Item
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
