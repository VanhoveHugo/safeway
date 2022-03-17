import type { NextPage } from 'next'
import { Layout } from '@components/Layout'
import { useSession } from "next-auth/react"

const Home: NextPage = () => {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <Layout title="Safe Way">
      <div className="hero">
      </div>
    </Layout>
  )
}

export default Home
