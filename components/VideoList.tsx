import React, { useEffect, useState } from 'react';
import VideoListItem from './VideoListItem';
import { musicObj, videoListProps } from '../pages/play/[id]';

export interface videoListItemProps{
  video: musicObj,

}

const VideoList = ({videoList} : videoListProps) => {
  return(
    <>
      <div className="videolist-container">
        {videoList && videoList.map((item)=>{
          return <VideoListItem video={item} />
        })}
      </div>
      <style jsx>{`
        .videolist-container{
          display: flex;
          flex-direction: column;
          border-radius: 0px 0px 35px 35px;
          padding: 15px;
          overflow:scroll;
          
        }
      `}</style>
    </>
    
  );     
}

export default VideoList;