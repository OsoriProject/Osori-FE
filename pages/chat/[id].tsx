import { NextPage } from "next";
import Image from "next/image";
import ChatElem from "../../components/ChatElem";
import Container from "../../components/Container";
const userSpeech = {
  sender: 1,
  content: "우울할 때 들을 음악 추천해줘"
}
const osoriSpeech = {
  sender: 0,
  content: "우울할 땐 이런 음악을 들어보세요!"
}

const Chat : NextPage = () => {
  
  return (
    <>
      <div className="container">
        <Container>
          <div className="chat-header">
            <div style={{
              position:"relative",
              width:"2.8em",
              height:"2.8em",
              marginLeft:"2.8em",
              
            }}>
              <Image src="/images/chat-logo.svg" layout="fill" />
            </div>
            <p>오소리</p>
            <div style={{width:"2.8em", height:"2.8em", marginRight:"2.8em"}}>
            </div>
          </div>
          <div className="divider">
            <div id="line"></div>
            <p>Today</p>
            <div id="line"></div>
          </div>
          <div className="chat-screen">
            <ChatElem chatElemProps={userSpeech} />
            <ChatElem chatElemProps={osoriSpeech} />
          </div>
        </Container>
      </div>
      <style jsx>{`
        .container{
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
        }
        .chat-header{
          margin-top:3rem;
          display:flex;
          width:100%;
          align-items:center;
          justify-content:space-between;
        }
        .chat-header p{
          font-size:1.25em;
        }
        .divider{
          display:flex;
          margin-top:1.3em;
          width:85%;
          justify-content:center;
          align-items:center;
        }
        .divider p{
          font-size:0.75em;
          color:black;
          opacity:70%;
          margin: 0 0.56em 0 0.56em;
        }
        #line{
          width:45%;
          height:1px;
          background-color:#C2C2C2;
        }
        .chat-screen{
          width:85%;
          margin-top: 2.75em;
        }
      `}</style>
    </>
  );
}

export default Chat;