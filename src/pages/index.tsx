import type { NextPage } from 'next'
import { Layout } from '@components/Layout'
import { useSession } from "next-auth/react"

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <Layout title="Safe Way">
      <div className="hero">
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      hello: 'world'
    }
  }
}

export default Home
