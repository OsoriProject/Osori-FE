import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import MyList from '../../components/MyList';
import { PlayList } from '../play/[id]';

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

const index: NextPage = ({results}) => {
  const [nickName, setNickName] = useState(null);
  useEffect(()=>{
    setNickName(JSON.parse(localStorage.getItem("nickname")));
  }, [])
  return (
    <>
      <div className="container">
        <h1 className="playlist-title">{nickName}님의 플레이리스트</h1>
        <Container height={200}>
          <MyList playLists={results} />
        </Container>
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

export async function getServerSideProps({params}:{params: number}){

	const results = await (
    await fetch(
    // 이 부분에서 로그인된 유저 아이디가 매치되는 플레이리스트들만 따로 받아온다. /playlist/userId로 get요청
    `http://localhost:3002/mylists/`
  )).json();
	
	return {
		props:{
			results,
		}	
	};
}
export default index;