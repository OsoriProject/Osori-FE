import Image from 'next/image';
import React from 'react';
import { videoListItemProps } from './VideoList';

const VideoListItem = ({video, setSelectedVideoId}: videoListItemProps) => {

  const handleSelect = (id: string)=>{
    setSelectedVideoId(id);
  }

  return(
    <>
      <div className="videoitem-container" onClick={()=>{handleSelect(video.videoId)}}>
        <div className="thumbnail-container">
          <Image src={video.thumbnail} layout="fill"/>
        </div>
        <div className="title-container">
          <div>{video.title}</div>
        </div>
      </div>
      <style jsx>{`
        .videoitem-container{
          display:flex;
          margin:10px 10px 10px 10px;
          box-shadow: 1.55897px 6.2359px 7.79487px rgba(0, 0, 0, 0.3);
          cursor: pointer;
        }
        .videoitem-container:hover{
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        .thumbnail-container{
          position: relative;
          width: 160px;
          height: 90px;
          min-width:160px;
          max-width:160px;
        }
        .title-container{
          display:flex;
          padding-left:15px;
        }
        .title-container div{
          display:flex;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export default VideoListItem;