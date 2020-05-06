import { NextPage, GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

import Layout from '~/components/Layout'
import List from '~/components/List'
import styles from './User.module.styl'
import { api } from '~/api/client'
import { Users } from '~/interfaces'

type Props = {
  items: Users.Item[]
}

const WithInitialProps: NextPage<Props> = ({ items }) => {
  const router = useRouter()
  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1 className={styles.title}>Users List</h1>
      <p>
        Example fetching data from inside <code>getInitialProps()</code>.
      </p>
      <p>You are currently on: {router.pathname}</p>
      <List items={items} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Example for including initial props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Users.Item[] = await api.client.users.list()
  return { props: { items } }
}

export default WithInitialProps
