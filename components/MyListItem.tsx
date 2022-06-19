import React from 'react';
import { MyListItemProps } from '../pages/mylist';
import Image from 'next/image';
import { useRouter } from 'next/router';

const MyListItem = ({index, id, name, thumbnail, isLast}: MyListItemProps) => {
  const router = useRouter();
  return (
    <>
      <div className="mylistitem-container" onClick={()=>{router.push(`/playlist/${id}`)}}>
        <div className="thumbnail-container">
          <div className="play-icon">
            <Image src="/icons/play.svg" layout="fill" />
          </div>
          <Image 
            src={thumbnail} 
            layout="fill" 
            style={{
              borderRadius: index === 0 ? '35px 0 0 0' : isLast ? "0 0 0 35px" : "0" 
              }}
          />
        </div>
        <div className="name-container">
          <div>{name}</div>
        </div>
      </div>
      <style jsx>{`
        .mylistitem-container{
          display:flex;
          margin-bottom: 10px;
          cursor: pointer;
          border-radius: ${isLast ? "0 0 0 35px" : "0"};
        }
        .mylistitem-container:hover{
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        .thumbnail-container{
          position: relative;
          width: 200px;
          height: 200px;
          min-width:200px;
          max-width:200px;
        }
        .name-container{
          display:flex;
          padding-left:15px;
          font-size: 1.5em;
        }
        .name-container div{
          display:flex;
          align-items:center;
        }
        .play-icon{
          position:relative;
          width:33px;
          height:33px;
          top:25px;
          left:150px;
          z-index:99
        }
      `}</style>
    </>
  );
}

export default MyListItem;