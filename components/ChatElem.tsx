interface chatObj{
  sender: number, // 0: Osori, 1: user
  content: string
}

const ChatElem = ({chatElemProps} : {chatElemProps: chatObj}) =>{
  return (
    <>
      <div className="chat-elem-container">
        <div className="speech">
          <div className="tail"></div>
          <div className="body">
            <p>{chatElemProps.content}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .chat-elem-container{
          display:flex;
          width:100%;
          margin:1.25em 0 1.25em 0;
          justify-content: ${chatElemProps.sender === 0 ? "flex-start" : "flex-end"};
        }
        .speech{
          display:flex;
          height:1.8em;
          max-width:100%;
          align-items:flex-end;
        }
        .body{
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:50%;
          height:1.8em;
          background-color: ${chatElemProps.sender === 0 ? "#B695F9" : "#68A5FF"};
          order: ${chatElemProps.sender === 0 ? 1 : 0}
        }
        .tail{
          border-radius:100%;
          width:0.56em;
          height:0.56em;
          background-color: ${chatElemProps.sender === 0 ? "#B695F9" : "#68A5FF"};
          order: ${chatElemProps.sender === 0 ? 0 : 1}
        }
        p{
          color:white;
        }
      `}</style>
    </>
  );
}

export default ChatElem;