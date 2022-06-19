import React from 'react';
import { MyListProps } from '../pages/mylist';
import MyListItem from './MyListItem';

const MyList = ({playLists}: MyListProps) => {
  return(
    <>
      <div className="mylists-container" >
        {playLists && playLists.map((list, i)=>{
          return <MyListItem 
                  index={i}
                  id={list.id}
                  name={list.name}
                  thumbnail={list.thumbnail} 
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