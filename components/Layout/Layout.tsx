import { FC } from 'react'
import Head from 'next/head'

import { layoutProps } from 'utils/type'
import { Navigation } from 'components/Navigation'

const Layout: FC<layoutProps> = ({ children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className='bg-neutral-700 h-screen'>
                <Navigation />
                {children}
            </body>
        </>
    )
}

export default Layout