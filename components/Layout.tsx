import Image from "next/image";
import { ReactNode } from "react";
import NavBar from "./Navbar";

function Layout({children} : {children: ReactNode}){
  return(
    <div className="container">
      <NavBar />
      <div className="background">
        <div className="svg-wrapper">
          <svg width="1440" height="111" preserveAspectRatio="none" viewBox="0 0 1440 111" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.25" d="M0 110V63.7056C57.348 41.5034 124.308 31.5325 189.6 35.7029C274.032 41.0734 353.196 69.0161 437.76 73.2065C526.368 77.5669 614.808 56.3249 699.6 37.9431C782.724 19.9414 865.56 13.0607 950.88 24.8618C994.26 30.8624 1034.7 42.7035 1076.22 54.2047C1187.39 84.9976 1335.6 124.291 1440 57.525V110H0Z" fill="white"/>
            <path opacity="0.5" d="M0 110V94.1885C15.6 73.0765 33.168 53.1346 57.228 37.9431C119.292 -1.28066 198 -1.01063 269.496 18.4112C306.876 28.5622 341.604 44.4837 377.1 58.215C426.204 77.2169 478.776 104.219 534.096 107.89C577.608 110.74 619.176 98.4689 652.416 76.3268C690.54 50.9343 727.2 14.3208 776.772 3.31979C825.3 -7.47124 874.392 10.0104 919.728 27.6021C965.064 45.1938 1009.92 66.6058 1060.03 70.6562C1131.71 76.5068 1195.97 47.774 1262.71 31.8125C1298.95 23.1517 1333.51 25.6419 1367.22 39.3132C1394.14 50.2043 1424.82 66.2458 1440 88.5579V110H0Z" fill="white"/>
            <path d="M0 111V105.369C179.916 51.9943 376.908 39.6732 570.996 68.4259C622.596 76.0667 672.072 88.5478 724.128 94.8885C794.928 103.519 859.104 82.6473 922.8 59.4851C993.516 33.7726 1063.2 15.7509 1141.44 20.9914C1245.28 27.992 1348.39 66.7058 1440 105.81V111H0Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div>{children}</div>
        <style jsx>{`
          .container{
            display:flex;
            flex-direction: column;
            justify-content:center;
          }
          .background{
            position:absolute;
            display:block;
            width:100%;
            height:35rem;
            top:0;
            left:0;
            z-index:-999;
            // left: 31.3%;
            // right: 39.53%;
            // top: 77.81%;
            // bottom: 7.48%;
            background: linear-gradient(199.2deg, #69B2FF -19.13%, #68A5FF 37.09%, #A6B3FD 86.89%, #6619FF 135.08%);
          }
          .svg-wrapper{
            display:block;
            position:relative;
            width: 100%;
            height: 80px;
            bottom:-86%;
            background: rgba(0,0,0,0)
          }
          .svg-wrapper svg{
            width:100%;
            height: 100%;
          }
        `}</style>
      
    </div>    
  )
}

export default Layout;