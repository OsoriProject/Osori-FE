import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Container from "../../components/Container";
import Modal from "../../components/Modal";
import VideoList from "../../components/VideoList";
import { ModalProps } from "../../components/Modal";

export type musicObj = {
  thumbnail: string,
  videoId: string, 
  title: string
}
export interface PlayList {
  id: number,
  name: string, 
  user: string, 
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
export interface youtubeSearchResponse{
  kind: string,
  etag: string,
  nextPageToken: string,
  regionCode: string,
  pageInfo: { totalResults: number, resultsPerPage: number},
  items: {
    kind: string,
    etag: string,
    id: {
      kind: string, 
      videoId: string,
    },
    snippet: {
      publishedAt: string,
      channelId: string,
      title: string,
      description: string,
      thumbnails: {
        default: {
          url:string,
          width: number,
          height: number,
        },
        medium: {
          url:string,
          width: number,
          height: number,
        },
        high: {
          url:string,
          width: number,
          height: number,
        }
      },
      channelTitle: string,
      liveBroadcastContent: string,
      publishTime: string,
    }
  }[]
}
const Play: NextPage = ({name, musics})=>{
  
  
    // {
    //   thumbnail: 'https://i.ytimg.com/vi/ijpqjHEQF4o/default.jpg',
    //   videoId: 'ijpqjHEQF4o',
    //   title: 'Lawson - Blind (Official Audio)'
    // }

  
  const [selectedVideoId, setSelectedVideoId] = useState<string>(musics[0].videoId);
  const [showModal, setShowModal] = useState(false);

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
            <h2>{musics.map(item=>{
              if(selectedVideoId === item.videoId){
                return <p>{item.title}</p>
              }
            })}</h2>
            <div className="icon-wrapper" onClick={()=>{setShowModal(true)}}>
              <Image src="/icons/three_dots.svg" layout="fill" />
            </div>
          </div>
          <VideoList 
            videoList={musics}  
            setSelectedVideoId={setSelectedVideoId}
          />
        </Container>
        <Modal title={"플레이리스트를 저장할까요?"} proceedText={"네, 저장할래요"} retreatText={"아니오, 다음에 할래요"}/>
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
export async function getStaticPaths(){
  const res = await fetch('http://localhost:3002/playLists');
  const playlist = await res.json();
  const paths = playlist.map((list : {id: string}) => ({
    params: { id: list.id.toString() },
  }))
  
  return { paths, fallback: false }
}

export async function getStaticProps({params}) {

  const res = await fetch(`http://localhost:3002/playLists/${params.id}`)
  const playlist = await res.json();
  // const requests = playlist.musics.map((query:string) => fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&type=video&key=${process.env.YOUTUBE_API_KEY}`))
  // const musicData = await Promise.all(requests)
  // .then(responses=> Promise.all(responses.map(r=>r.json())))
  // .catch(e=>console.log(e));
  
  return {
    props:{
      name: playlist.name,
      musics: playlist.musics
    }
  }  
  //`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&type=video&key=${this.key}`,
  // playlist.musics.forEach((query: string) => {
  //   searchByQuery(query)
  //   .then(res=>res.json())
  //   .then(json=>{
  //     videoLists.push({
  //       thumbnail: json.items[0].snippet.thumbnails.default.url,
  //       videoId: json.items[0].id.videoId,
  //       title: json.items[0].snippet.title
  //     });
  //   });
  // });
  
  
}

export default Play;