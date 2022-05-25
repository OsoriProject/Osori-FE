import React, { useEffect, useState } from 'react';
import VideoListItem from './VideoListItem';
import { musicObj, videoListProps } from '../pages/play/[id]';
import { isArray } from 'util';

export interface videoListItemProps{
  video: musicObj,
}

const VideoList = ({videoList} : videoListProps) => {
  useEffect(()=>{
    console.log(videoList);
    //console.log(typeof());
  })
  return(
    <div className="videolist-container">
      {videoList && videoList.map(item=>{
        return <VideoListItem video={item} />
      })}
    </div>
  );     
}

export default VideoList;