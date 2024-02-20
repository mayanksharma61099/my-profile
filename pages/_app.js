import '@/styles/globals.css'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
export default function App({ Component, pageProps }) {
    <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" src="../public/img/MayankSharma.png" type="image/x-icon" /> 
    </Head>
  return <Component {...pageProps} />
}
