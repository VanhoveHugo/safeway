import type { NextPage, GetServerSideProps  } from 'next'
import { Layout } from '@components/Layout'
import { useSession, getSession } from "next-auth/react"
import style from '@styles/pages/profile.module.css'

const Home: NextPage = () => {
    const { data: session, status } = useSession()
    const loading = status === "loading"
    
    return (
        <Layout title="Safe Way">
          <div className={style.profile} >
          
            <figure className={style.imgContainer} >
              {status == "loading" ?
                <div className={style.preload}  />
              :
                <img src={session?.user.image || ""} />
              }
            </figure>
            <h1>{session?.user && session.user.name}</h1>
            <hr />
            Challenges
            <ul>
              
            </ul>
          </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}

export default Home
