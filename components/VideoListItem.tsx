import Image from 'next/image';
import React from 'react';
import { videoListItemProps } from './VideoList';

const VideoListItem = ({video}: videoListItemProps) => {
  return(
    <>
      <div className="videoitem-container">
        <div className="thumbnail-container">
          <Image src={video.thumbnail} layout="fill"/>
        </div>
        <div className="title-container">
          <p>{video.title}</p>
        </div>
      </div>
      <style jsx>{`
        .videoitem-container{
          display:flex;
          margin:10px 10px 10px 10px;
          box-shadow: 1.55897px 6.2359px 7.79487px rgba(0, 0, 0, 0.3);
        }
        .thumbnail-container{
          position: relative;
          width: 160px;
          height: 90px;
        }
        .title-container{
          display:flex;
          padding-left:15px;
          
        }
        
      `}</style>
    </>
  );
}

export default VideoListItem;