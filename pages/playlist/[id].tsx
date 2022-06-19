import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { deletePlaylistsRequest, getPlaylistDetailRequest } from "../../api/PlaylistApi";
import Container from "../../components/Container";
import Modal from "../../components/Modal";
import VideoList from "../../components/VideoList";

export type musicObj = {
  thumbnail: string,
  videoId: string, 
  title: string
}

export interface PlayList {
  id: number,
  name: string, 
  user?: string, 
  thumbnail: string,
  musics: {
    thumbnail: string,
    title: string, 
    videoId: string
  }[],
}

export type videoListProps = {
  videoList: musicObj[],
  setSelectedVideoId: any,
}

const Playlist: NextPage = ({playlistId}:any)=>{

  const [selectedVideoId, setSelectedVideoId] = useState<string>("");
  const [thisPlaylist, setThisPlaylist] = useState([]);
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const handleDeletePlaylist = async ()=>{
    try{
      await deletePlaylistsRequest(playlistId);
      document.body.style.overflow = "scroll";
      alert('플레이리스트를 삭제하였습니다!');
    }catch(e){
      console.log(e);
    }
    router.push('/mylist');
    
  }
  useEffect(()=>{
    if(showModal){
      document.body.style.overflow="hidden";
    }else{
      document.body.style.overflow="scroll";
    }
  }, [showModal])
  useEffect(()=>{
    const getPlaylistDetail = async()=>{
      try{
        const res = await getPlaylistDetailRequest(playlistId);
        setName(res.name);
        setThisPlaylist(res.musics);
        setSelectedVideoId(res.musics[0].videoId);
      }catch(e){
        console.log(e);
      }
    }
    getPlaylistDetail();
  }, [])

  return(
    <>
      <div className="container">
        <h1 className="playlist-title">{name}</h1>
        <Container height={200}>
          <div className="iframe-container">
            <iframe 
              style={{"borderRadius" : "35px 35px 0 0"}} 
              width="100%" 
              height="315" 
              src={`https://youtube.com/embed/${selectedVideoId}`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen={true}>
            </iframe>
          </div>
          <div className="title-container">
            <h2>{thisPlaylist.map((item: {thumbnail: string, videoId: string, title: string})=>{
              if(selectedVideoId === item.videoId){
                return <p>{item.title}</p>
              }
            })}
            </h2>
            <div className="icon-wrapper" onClick={()=>{
                setShowModal(true);
              }}>
                <Image src="/icons/trash-2.svg" layout="fill" />
              </div>
          </div>
          <VideoList 
            videoList={thisPlaylist}  
            setSelectedVideoId={setSelectedVideoId}
          />
        </Container>
        {showModal && 
          <Modal 
            title={"플레이리스트를 삭제할까요?"} 
            proceedText={"네, 삭제할래요"} 
            retreatText={"아니오, 다음에 할래요"}
            onClickProceed={()=>{handleDeletePlaylist()}}
            onClickRetreat={()=>{setShowModal(false)}}
        />}
      </div>
      <style jsx>{`
        .container{
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
        }
        .iframe-container{
          width:100%;
          height:315px;
        }
        .title-container{
          width:100%;
          display:flex;
          justify-content: space-around;
          align-items: center;
        }
        .icon-wrapper{
          position:relative;
          width:30px;
          height:30px;
          cursor: pointer;
          padding-left: 50px;
        }
        .playlist-title{
          color: #FFFFFF;
          font-weight: 400;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  )
}

export async function getServerSideProps({params}:any) {

  return {
    props:{
      playlistId: params.id,
    }
  }  
}

export default Playlist;