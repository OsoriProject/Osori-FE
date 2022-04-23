import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import ChatElem from "../../components/ChatElem";
import Container from "../../components/Container";
import { chatObj } from "../../components/ChatElem";
const userSpeech = {
  sender: 1,
  content: "우울할 때 들을 음악 추천해줘"
}
const osoriSpeech = {
  sender: 0,
  content: "우울할 땐 이런 음악을 들어보세요!"
}

const Chat : NextPage = () => {
  const [msg, setMsg] = useState({});
  const [msgList, setMsgList] = useState<chatObj[]>([
    userSpeech, osoriSpeech
  ]);
  const handleSendMessage = ()=>{
    alert("Message Sent");
  }
  useEffect(()=>{
    setMsgList([userSpeech, osoriSpeech]);
  }, [])
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
            {msgList && msgList.map((msgObj)=>{
              return <ChatElem key={msgObj.content} chatElemProps={msgObj} />
            })}
          </div>
          <form onSubmit={handleSendMessage} className="chat-form">
            <input 
              type="hidden"
            />
            <input
              type="text"
              className="chat-input"
              placeholder="Text Message"
            />
            <button type="submit">
              <div style={{position:"relative", width:"34px", height:"34px"}}>
                <Image src="/images/send.svg" layout="fill"/>
              </div>
            </button>
          </form>
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
          flex:0.95;
        }
        .chat-form{
          width:85%;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .chat-input{
          height: 40px;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 40px;
          margin: 0 0.5rem 0 0;
          width: calc(100% - 52px);
          background-color: #dedfed;
          box-shadow: inset 0 0 0 2px #dedfed;
          font-size: 14px;
          font-family: 'GmarketSans', sans-serif;
          font-weight: normal;
          transition: 0.15s all ease-in-out;
          box-sizing: border-box;
        }
        button{
          all: unset;
          border-radius:50%;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default Chat;