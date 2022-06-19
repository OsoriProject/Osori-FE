import React, { useEffect, useRef } from 'react';
import ChatElem from './ChatElem';

export interface ChatContainerProps {
  msgList: any[],
}

const ChatContainer = ({msgList}:ChatContainerProps) => {
  const divRef = useRef(null);

  const scrollToBottom = () => {
    divRef.current.scrollIntoView({ behavior: "auto" })
  }
  useEffect(()=>{
    scrollToBottom();
  }, [msgList])
  return(
    <>
      <div className="chat-container" >
        {msgList && msgList.map((msgObj)=>{
          return <ChatElem key={msgObj.id} chatElemProps={msgObj} />
        })}
      <div ref={divRef}/>
      </div>
      <style jsx>{`
        .chat-container{
          display: flex;
          width:100%;
          min-height:440px;
          flex-direction: column;
          border-radius: 0px 0px 35px 35px;
          padding-left: 40px;
          padding-right: 40px;
          overflow:scroll;
        }
      `}</style>
    </>
  );
}

export default ChatContainer;