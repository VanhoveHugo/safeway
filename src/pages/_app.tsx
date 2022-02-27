import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp;
