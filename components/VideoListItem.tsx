import Image from 'next/image';
import React from 'react';
import { videoListItemProps } from './VideoList';

const VideoListItem = ({video}: videoListItemProps) => {
  return(
    <div>
      <Image src={video.thumbnail} layout="fill"/>
      <h2>{video.title}</h2>
    </div>
  );
}

export default VideoListItem;