export interface chatObj{
  sender: string, // 'bot': Osori, 'user': User
  content: string
}

const ChatElem = ({chatElemProps} : {chatElemProps: chatObj}) =>{
  return (
    <>
      <div className="chat-elem-container">
        <div className="speech">
          <div className="tail"></div>
          <div className="body">
            {chatElemProps.content}
          </div>
        </div>
      </div>
      <style jsx>{`
        .chat-elem-container{
          display:flex;
          width:100%;
          margin:1.25em 0 1.25em 0;
          justify-content: ${chatElemProps.sender === 'bot' ? "flex-start" : "flex-end"};
        }
        .speech{
          display:flex;
          min-height:1.8em;
          max-width:50%;
          align-items:flex-end;
        }
        .body{
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:20px;
          padding:0px;
          color:white;
          min-height:1.8em;
          padding:10px;
          box-sizing:border-box;
          background-color: ${chatElemProps.sender === 'bot' ? "#B695F9" : "#68A5FF"};
          order: ${chatElemProps.sender === 'bot' ? 1 : 0}
        }
        .tail{
          border-radius:100%;
          width:0.56em;
          height:0.56em;
          flex-shrink:0;
          background-color: ${chatElemProps.sender === 'bot' ? "#B695F9" : "#68A5FF"};
          order: ${chatElemProps.sender === 'bot' ? 0 : 1}
        }
        
      `}</style>
    </>
  );
}

export default ChatElem;