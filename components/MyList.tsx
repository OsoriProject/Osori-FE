import React from 'react';
import { MyListProps } from '../pages/mylist/[userId]';
import MyListItem from './MyListItem';

const MyList = ({playLists}: MyListProps) => {
  console.log(playLists);
  return(
    <>
      <div className="mylists-container">
        {playLists && playLists.map((list, i)=>{
          return <MyListItem 
                  index={i}
                  id={list.id}
                  name={list.name}
                  thumbnail={list.musics[0].thumbnail} 
                  isLast={i===playLists.length-1? true : false} 
                 />
        })}
      </div>
      <style jsx>{`
      .mylists-container{
        display: flex;
        flex-direction: column;
        width:100%;
        overflow:scroll;
      }
      `}</style>
    </>
  );
}

export default MyList;