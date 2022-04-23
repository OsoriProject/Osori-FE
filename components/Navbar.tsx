import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function NavBar(){
  const router = useRouter();
  // is navbar scrolled down? 
  const [navbar, setNavbar] = useState(false);
  // is the navbar toggle btn clicked?
  const [menu, setMenu] = useState(false);
  // is Logged in?
  const [isLogin, setIsLogin] = useState(false);
  //navbar background change resposive to scroll
  const changeNavbarBackgroundOnScroll = ()=>{
    setNavbar(window.scrollY >= 1 ? true : false);
    setMenu(false);
  };
  //menu dropdown resposinve to toggle btn click
  const clickMenu = () =>{
    if(window.scrollY <= 1){
      setNavbar(!navbar);
    }
    setMenu(!menu);
  }
  const handleClickLink = ()=>{
    setMenu(false);
    setNavbar(false);
  }
  useEffect(()=>{
    window.addEventListener('scroll', changeNavbarBackgroundOnScroll);
    return () => window.removeEventListener('scroll', changeNavbarBackgroundOnScroll);
  }, [])
  
  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="nav-brand">
        <img src="/images/osori_text_logo_white.png"/>
      </div>
      <div className={menu ? "nav-menu active" : "nav-menu"}>
        <Link href="/" >
          <a className={router.pathname==="/" ? "selected" : ""} onClick={handleClickLink}>ABOUT</a>
        </Link>
        <Link href="/chat/1" >
          <a className={router.pathname==="/chat/[id]" ? "selected" : ""} onClick={handleClickLink}>CHAT</a>
        </Link>
        {isLogin ? 
          <Link href="/mylists">
            <a className={router.pathname==="/mylist/1" ? "selected" : ""} onClick={handleClickLink}>MYLISTS</a>
          </Link>
          :
          <Link href="/login">
            <a className={router.pathname==="/login" ? "selected" : ""} onClick={handleClickLink}>LOGIN</a>
          </Link>
        }
      </div>
      <a 
        className="nav-toggle-btn"
        onClick={()=>{clickMenu()}}
      >
        <Image src="/icons/hamburger_menu.svg" width="32" height="32" />
      </a>
      <style jsx>{`
        .navbar {
          position: -webkit-sticky;
          position:sticky;
          z-index:999;
          background-opacity:1;
          display:flex;
          justify-content: space-between;
          align-items:center;
          padding:1.5rem;
          top:0;
        }
        .active{
          background-color:#B695F9;
          -webkit-transition:width 2s, height 2s, background-color 2s, -webkit-transform 1s;
          transition:width 2s, height 2s, background-color 0.5s, transform 1s;
        }
        .nav-menu{
          display: flex;
          justify-content:center;
          align-items:center;
          margin-right:4.31em;
          font-size:1.25em;
        }
        .nav-toggle-btn{
          display:none;
        }
        a {
          text-decoration:none;
          margin-left:2.3em;
          color:white;
        }
        a:hover{
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        .selected{
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        @media screen and (max-width: 768px) {
          .navbar{
            flex-direction: column;
            align-items:flex-start;
            padding:0;
            padding-bottom:5px;
          }
          .nav-brand{
            margin: 1em 0 0 2em;
          }
          .nav-menu{
            display:flex;
            visibility:hidden;
            flex-direction:column;
            align-items:center;
            width:100%;
            position:absolute;
            top:24.5px;
            margin:10px 0 0 0;
            background-color:#B695F9;
            z-index:-99;
          }
          .nav-toggle-btn{
            display:block;
            cursor:pointer;
            position:absolute;
            right:32px;
            top:13px;
          }
          .nav-menu a {
            margin:0;
            text-align:center;
            width:100%;
            padding:5px;
          }
          .nav-menu a:hover{
            background-color:violet;
            transition:500ms;
          }
          .nav-menu.active{
            display:flex;
            visibility:visible;
            transform: translateY(1em);
            transition: all 0.5s ease;
          }
        }
      `}</style>
    </nav>
  );
}

export default NavBar;