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
            <Image src="/images/logo_stroke_white.svg" layout="fill"  />
          </div>
          <div className="text-logo-container">
            <Image src="/images/osori_text_logo.svg" layout="fill" />
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
            <Image src="/images/tutorial-step1.svg" width="426" height="436"/>
          </div>
          <div className="tutorial-description">
            <Image src="/images/description-blob-step1.svg" layout="fill" style={{zIndex:-1}}/>
            <h1 style={{color:'black', fontSize:"2.5em", textAlign:"center"}}>간편한 채팅.</h1>
            <p style={{color:'black', fontSize:"1.5em", textAlign:"center", width:"110%"}}>
              오소리에게 편하게 말을 걸어<br/>
              지금 듣고싶은 음악을 추천받으세요.
            </p>
          </div>
        </article>
        <article className="tutorial" id="second">
          <div className="tutorial-description">
            <Image src="/images/description-blob-step2.svg" layout="fill" style={{zIndex:-1}}/>
            <h1 style={{color:'black', fontSize:"2.5em", textAlign:"center"}}>
              즐거운 감상.
            </h1>
            <p style={{color:'black', fontSize:"1.5em", textAlign:"center", width:"110%"}}>
              추천받은 음악을 감상해 보아요.
            </p>
            </div>
          <div className="tutorial-picture">
            <Image src="/images/tutorial-step2.svg" width="393" height="456"/>
          </div>
        </article>
        <article className="tutorial">
          <div className="tutorial-picture">
            <Image src="/images/tutorial-step3.svg" width="430" height="515"/>
          </div>
          <div className="tutorial-description">
            <Image src="/images/description-blob-step3.svg" layout="fill" style={{zIndex:-1}}/>
            <h1 style={{color:'black', fontSize:"2.5em", textAlign:"center"}}>
              플레이리스트 저장.
            </h1>
            <p style={{color:'black', fontSize:"1.5em", textAlign:"center", width:"110%"}}>
              플레이리스트가 마음에 드셨다면<br />
              내 오소리 계정에 저장하세요!
            </p>
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
            justify-content:space-around;
            align-items:center;
            margin-bottom:2em;
          }
          .tutorial div:first-child{
            margin-left:6em;
          }
          .tutorial div:nth-child(2){
            margin-right:6em;
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
          .tutorial-picture{
            position:relative;
            width:426px; 
            height:436px;
          }
          .tutorial-description{
            position:relative;
            width:349px;
            height: 332px; 
          }
          .tutorial:first-child{
            margin-top:10em;
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
              text-align:center;
            }
            .banner{
              flex-direction:column;
            }
            .banner-description{
              display:flex;
              flex-direction:column;
              align-items:center;
              width:100%;
            }
            .tutorial{
              display:none;
            }
            .tutorial{
              display:flex;
              flex-direction:column;
            }
            .tutorial div:first-child{
              margin: 0 0 4em 0;
            }
            .tutorial div:nth-child(2){
              margin:0;
            }
            #second div:first-child{
              order:2;
              margin: 0 0 4em 0;
            }
            #second div:nth-child(2){
              margin: 0 0 4em 0;
            }
          }
        `}
      </style>
    </>
  );
}

export default Home
