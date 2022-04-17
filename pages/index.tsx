import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>소리를 만나다, 오소리</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no" />
        <link rel="shortcut icon" href="/icons/favicon.ico"/>
      </Head>
      <section className="container">
        
      </section>
      <style jsx>
        {`
          .container{
            height:2000px;
          }
        `}
      </style>
    </>
  );
}

export default Home
