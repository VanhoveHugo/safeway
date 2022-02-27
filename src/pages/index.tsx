import type { NextPage } from 'next'
import { Layout } from 'components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Safe Way">
      <h1 className="text-red-500 text-lg font-bold text-center">First Commit</h1>
    </Layout>
  )
}

export default Home
