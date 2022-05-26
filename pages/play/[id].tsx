import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "../../components/Container";
import VideoList from "../../components/VideoList";

export type musicObj = {
  thumbnail: string,
  videoId: string, 
  title: string
}
export type videoListProps = {
  videoList: musicObj[],
}
const tmpVideoList: musicObj[] = [

]
const Play: NextPage = ()=>{
  const videoSrcs: string[] = [
    'https://www.youtube.com/embed/2fvw0TkENHM'
  ];
  
  const [videoList, setVideoList] = useState([
    {
      thumbnail: 'https://i.ytimg.com/vi/ijpqjHEQF4o/default.jpg',
      videoId: 'ijpqjHEQF4o',
      title: 'Lawson - Blind (Official Audio)'
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/xBfA2jQbfJg/default.jpg',
      videoId: 'xBfA2jQbfJg',
      title: '🌞너무 뜨거웠던 그때의 우리 | almost monday - sunburn [가사/번역/해석/Lyrics] 🧡'
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/FIILsSmS_nA/default.jpg',
      videoId: 'FIILsSmS_nA',
      title: 'BoyWithUke - Long Drives (Official Music Video)'
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/1LBm1lTt-rQ/default.jpg',
      videoId: '1LBm1lTt-rQ',
      title: 'Pink Sweat$ - I Feel Good [Official Audio]'
    }
  ])
  useEffect(()=>{
    
  }, [])
  return(
    <>
      <div className="container">
        <h2>{"플레이리스트"}</h2>
        <Container>
          <div className="iframe-container">
            <iframe 
              style={{"borderRadius" : "35px 35px 0 0"}} 
              width="100%" 
              height="315" 
              src={`https://youtube.com/embed/${videoList[0].videoId}`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen={true}>
            </iframe>
          </div>
          <div className="title-container">
            <h2>{videoList[0].title}</h2>
            <div className="icon-wrapper">
              <Image src="/icons/three_dots.svg" layout="fill" />
            </div>
          </div>
          <VideoList videoList={videoList} />
        </Container>
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
      `}</style>
    </>
  )
}
// export async function getStaticPaths(){
//   const res = await fetch('http://localhost:3002/playLists');
//   const playlist = await res.json();
//   const paths = playlist.map((list : {id: string}) => ({
//     params: { id: list.id.toString() },
//   }))
  
//   return { paths, fallback: false }
// }

// export async function getStaticProps({params}) {

//   const res = await fetch(`http://localhost:3002/playLists/${params.id}`)
//   const playlist = await res.json();
//   const playlistName: string = playlist.name;
//   const videoLists:musicObj[] = [];
  
//   async function searchByQuery(query: string){
//     const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&type=video&key=${process.env.YOUTUBE_API_KEY}`)
//     return response;
//   }
//   //`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&type=video&key=${this.key}`,
//   playlist.musics.forEach((query: string) => {
//     searchByQuery(query)
//     .then(res=>res.json())
//     .then(json=>{
//       videoLists.push({
//         thumbnail: json.items[0].snippet.thumbnails.default.url,
//         videoId: json.items[0].id.videoId,
//         title: json.items[0].snippet.title
//       });
//     });
//   });
  
//   return {
//     props:{
//       playlistName,
//       videoLists,
//     }
//   }
  
// }

export default Play;