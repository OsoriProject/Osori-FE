import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { getPlaylistsRequest } from '../../api/PlaylistApi';
import Container from '../../components/Container';
import MyList from '../../components/MyList';
import { PlayList } from '../playlist/[id]';

export interface MyListItemProps{
  index: number,
  id: number, 
  name: string, 
  thumbnail: string,
  isLast: boolean,
}

export interface MyListProps{
  playLists: PlayList[],
}

const Mylist: NextPage = ({results}:any) => {

  const [nickName, setNickName] = useState(null);

  const [playLists, setPlayLists] = useState([]);
  const getPlayList = async ()=>{
    try {
      const result = await getPlaylistsRequest();
      setPlayLists(result.playlists);
      console.log(result)
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(()=>{
    setNickName(JSON.parse(localStorage.getItem("nickname")));
    getPlayList();
  }, [])
  return (
    <>
      <div className="container">
        <h1 className="playlist-title">{nickName}님의 플레이리스트</h1>
        {playLists.length !== 0 ?  
          <Container height={200}>
            <MyList playLists={playLists} />
          </Container>
          :
          <h1 style={{marginTop: "50px"}}>아직 저장된 플레이리스트가 없어요 😔</h1>
        }
      </div>
      <style jsx>{`
        .container{
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
        }
        .playlist-title{
          color: #FFFFFF;
          font-weight: 400;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
}

export default Mylist;