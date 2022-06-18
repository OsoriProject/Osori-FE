import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ChatElem from "../../components/ChatElem";
import Container from "../../components/Container";
import { chatObj } from "../../components/ChatElem";
import { ContainerProps } from "../../components/Container";
import { checkLogin } from "../../api/AuthApi";
import { getMessages, postMessage } from "../../api/MessageApi";

const Chat : NextPage = () => {
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeMsg = (msg: string) => {
    setMsg(msg);
  };
  
  const getUserMessageList = async () => {
    try {
      const result = await getMessages();
      setMsgList(result.chats);
    } catch (e) {
      console.log(e);
    }
  };

  const onSend = async () => {
    if (msg.length == 0) return;
    let newMessage = [...msgList, { content: msg, sender: "user" }];
    setMsgList(newMessage);
    setMsg("");
    try {
      await postMessage(msg);
      getUserMessageList();
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(()=>{
    if(inputRef.current){
      inputRef.current.focus();
    }
  }, [])
  useEffect(() => {
    getUserMessageList();
  }, []);
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
            <div style={{width:"2.8em", height:"2.8em", marginRight:"2.8em"}}></div>
          </div>
          <div className="divider">
            <div id="line"></div>
            <p>Today</p>
            <div id="line"></div>
          </div>
          <div className="chat-screen">
            {msgList && msgList.map((msgObj)=>{
              return <ChatElem key={msgObj.id} chatElemProps={msgObj} />
            })}
          </div>
          <form onSubmit={onSend} className="chat-form">
            <input 
              type="hidden"
            />
            <input
              type="text"
              ref={inputRef}
              className="chat-input"
              placeholder="우울할 때 들을만한 음악 추천해줘!"
              onChange={(e)=>{onChangeMsg(e.target.value)}}
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