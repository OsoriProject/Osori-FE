import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function NavBar(){
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);

  const changeNavbarBackground = ()=>{
    setNavbar(window.scrollY <=500 ? false : true);
  };

  const openMenu = () =>{
    setMenu(!menu);
  }
  useEffect(()=>{
    window.addEventListener('scroll', changeNavbarBackground);
    return () => window.removeEventListener('scroll', changeNavbarBackground);
  }, [])
  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="nav-brand">
        <img src="/images/osori_text_logo_white.png"/>
      </div>
      <div className={menu ? "nav-menu active" : "nav-menu"}>
        <Link href="/">
          <a className={router.pathname==="/" ? "selected" : ""}>ABOUT</a>
        </Link>
        <Link href="/">
          <a className={router.pathname==="/chat" ? "selected" : ""}>CHAT</a>
        </Link>
        <Link href="/">
          <a className={router.pathname==="/mylist" ? "selected" : ""}>MYLISTS</a>
        </Link>
      </div>
      <a 
        className="nav-toggle-btn"
        onClick={openMenu}
      >
        <Image src="/icons/hamburger_menu.svg" width="32" height="32" />
      </a>
      <style jsx>{`
        .navbar {
          position: -webkit-sticky;
          position:sticky;
          z-index:999;
          display:flex;
          justify-content: space-between;
          align-items:center;
          padding:1.5rem;
          top:0;
        }
        .active{
          background-color:#9933ff;
          -webkit-transition:width 2s, height 2s, background-color 2s, -webkit-transform 2s;
          transition:width 2s, height 2s, background-color 2s, transform 2s;
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
            background-color:#9933ff;
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