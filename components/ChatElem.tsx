import { musicObj } from "../pages/playlist/[id]";
import PlaylistBubble from "./PlaylistBubble";

export interface chatObj{
  id: number,
  sender?: string, // 'bot': Osori, 'user': User
  content: string,
  playlist?: musicObj[],
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
          {chatElemProps.sender === 'bot' && 
            <PlaylistBubble key={chatElemProps.id} id={chatElemProps.id} playlist={chatElemProps.playlist} />
          }
      </div>
      <style jsx>{`
        .chat-elem-container{
          display:flex;
          flex-direction: ${chatElemProps.sender.includes('bot') ? "column" : "row"};
          width:100%;
          margin:1.25em 0 1.25em 0;
          justify-content: ${chatElemProps.sender.includes('bot') ? "flex-start" : "flex-end"};
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
          background-color: ${chatElemProps.sender.includes('bot') ? "#B695F9" : "#68A5FF"};
          order: ${chatElemProps.sender.includes('bot') ? 1 : 0}
        }
        .tail{
          border-radius:100%;
          width:0.56em;
          height:0.56em;
          flex-shrink:0;
          background-color: ${chatElemProps.sender.includes('bot') ? "#B695F9" : "#68A5FF"};
          order: ${chatElemProps.sender.includes('bot') ? 0 : 1}
        }
        
      `}</style>
    </>
  );
}

export default ChatElem;