import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>소리를 만나다, 오소리</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no" />
        <link rel="shortcut icon" href="/icons/favicon.ico"/>
      </Head>
      <section className="banner">
        <div className="banner-logo">
          <div className="stroke-logo-container">
            <Image src="/images/logo_stroke_white.png" layout="fill" sizes="30vw" />
          </div>
          <div className="text-logo-container">
            <Image src="/images/osori_text_logo.png" layout="fill" sizes="30vw" />
          </div>
        </div>
        <div className="banner-description">
          <h1>
            나만의 음악 큐레이팅 챗봇
          </h1>
          <p 
            className="banner-slogan"
          >
            당신의 플레이리스트가<br/>
            더욱 다채로워질 수 있도록.<br/>
            소리를 만나다, 오소리<br />
          </p>
          <Link href="/chat">
            <a>
              <Button ButtonProps={{label:"오소리와 채팅하기", fontSize:1.25}}/>
            </a>
          </Link>
        </div>
      </section>
      <section className="tutorial-container">
        <article className="tutorial">
          <div className="tutorial-picture">
            <Image src="/images/tutorial-step1.png" width="426" height="436"/>
          </div>
          <div className="tutorial-description">
            
          </div>
        </article>
        <article className="tutorial">
          <div className="tutorial-description">
            
          </div>
          <div className="tutorial-picture">
            
          </div>
        </article>
        <article className="tutorial">
          <div className="tutorial-picture">
            
          </div>
          <div className="tutorial-description">
            
          </div>
        </article>
      </section>
      <style jsx>
        {`
          .tutorial-container{
            display:flex;
            flex-direction: column;
          }
          h1{
            color: white; 
            font-size:3.31em; 
            font-weight:normal;
            text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
          }
          p{
            color: white; 
            font-size:2.19em;
            line-height:1.35em;
            font-weight: normal;
            letter-spacing: -1px;
          }
          .tutorial{
            display:flex;
          }
          .banner{
            display:flex;
            justify-content:center;
            align-items:center;
          }
          .banner-logo{
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
          }
          .banner-description{
            width:100%;
          }
          .stroke-logo-container{
            position: relative;
            width:11.625em;
            height:11.875em;
            margin-bottom:1.76em;
          }
          .text-logo-container{
            position:relative;
            width: 21.125em; 
            height: 4.75em;
          }
          @media screen and (max-width: 768px) {
            .stroke-logo-container{
              position: relative;
              width:5.8em;
              height:5.9em;
              margin-bottom:0.88em;
            }
            .text-logo-container{
              position:relative;
              width: 10.65em; 
              height: 2.375em;
            }  
            h1{
              color: white; 
              font-size:1.655em; 
              font-weight:normal;
              text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
            }
            p{
              color: white;
              font-size:1.1em;
              line-height:1.5em;
              font-weight: normal;
              letter-spacing: -0.5px;
            }
          }
        `}
      </style>
    </>
  );
}

export default Home
