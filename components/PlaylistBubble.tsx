import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { musicObj } from '../pages/playlist/[id]';
import Button from './Button';
export interface PlaylistBubbleProps {
  id: number,
  playlist?: musicObj[],
}
//playlistObj: {
//   videoId: ,
//   title: ,
//   thumbnail: ,
// }
const TMP_PLAYLIST = [
  {
      "videoId": "wJTywspjyUs",
      "title": "Hoedown Throwdown",
      "thumbnail": "https://i.ytimg.com/vi/wJTywspjyUs/default.jpg"
  },
  {
      "videoId": "usSuZ-lwuuY",
      "title": "You Belong With Me (Taylor&#39;s Version) (Audio) - Taylor Swift",
      "thumbnail": "https://i.ytimg.com/vi/usSuZ-lwuuY/default.jpg"
  },
  {
      "videoId": "Rh5CVJI7r6Y",
      "title": "Albert Kick feat. Jason Rene - Black (From The Waist Down)",
      "thumbnail": "https://i.ytimg.com/vi/Rh5CVJI7r6Y/default.jpg"
  },
  {
      "videoId": "6jNYnz_V_FI",
      "title": "Jason Risk and Lumira - Sets Me Free (Original Mix) [OUT NOW!] [Safari Music]",
      "thumbnail": "https://i.ytimg.com/vi/6jNYnz_V_FI/default.jpg"
  },
  {
      "videoId": "z6i5LPFhuyU",
      "title": "Stay‬  - Taeyeon ‪태연",
      "thumbnail": "https://i.ytimg.com/vi/z6i5LPFhuyU/default.jpg"
  },
  {
      "videoId": "e6bs8v5vLko",
      "title": "아름다운 색 Colors",
      "thumbnail": "https://i.ytimg.com/vi/e6bs8v5vLko/default.jpg"
  },
  {
      "videoId": "6mTbxCBs0P4",
      "title": "TWICE (트와이스) - YES or YES (Audio) [YES or YES]",
      "thumbnail": "https://i.ytimg.com/vi/6mTbxCBs0P4/default.jpg"
  },
  {
      "videoId": "as6fQ_HPTJQ",
      "title": "빅뱅 - FANTASTIC BABY",
      "thumbnail": "https://i.ytimg.com/vi/as6fQ_HPTJQ/default.jpg"
  }
]
const arr_four = [0, 1, 2, 3];
const PlaylistBubble = ({id, playlist}: PlaylistBubbleProps) => {
  const router = useRouter();
  const handleClickPlaylist = ()=>{
    //채팅 id로 router query에 담아서 /play로 넘긴다. 
    router.push(`/play/${id}`);
  }
  return(
    <>
      <div className="bubble-container">
        <div className="thumnail-container">
          {
            arr_four.map((i)=>{
                return <div key={i} style={{width: "80px", height:"80px", position: "relative"}}>
                  <Image src={playlist[i].thumbnail} layout="fill" 
                    style={{borderRadius: i === 0 ? "15px 0 0 0" : i === 1 ? "0 15px 0 0" : "none"}}
                  />
                </div>
              })
          }
        </div>
        <div className="metadata-container">
          {playlist[0].title.substring(0, 15) + `...외 ${playlist.length}곡`}
        </div>
      </div>
      <div className="btn-wrapper" onClick={handleClickPlaylist}>
        <Button ButtonProps={{label: "감상하기", fontSize: 1}} />
      </div>
      <style jsx>{`
        .bubble-container{
          margin-top: 10px;
          display:flex;
          flex-direction: column;
          width:160px;
          outline: 3px solid #B695F9;
          border-radius: 15px;
        }
        .thumnail-container{
          padding:0;
          display:grid;
          grid-template-columns: 80px 80px;
	        grid-template-rows: 80px 80px;
        }
        .metadata-container{
          height:25px;
          padding-top:8px;
          text-align:center;
          font-size: 10px;
          font-color: grey;
        }
        .btn-wrapper{
          margin-top:10px;
          width:160px;
        }
        .thumnail-container:first-child{
          
        }
      `}</style>
    </>
  );
}

export default PlaylistBubble;