import Image from "next/image";
import Container from "../../components/Container";
import Link from "next/link";
import {useEffect, useRef, useState } from "react";
import { postSignIn } from "../../api/AuthApi";
import { useRouter } from "next/router";

const Login = ()=>{

  const inputRef = useRef<HTMLInputElement>(null);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(()=>{
    if(inputRef.current){
      inputRef.current.focus();
    }
  }, [])
  const handleLogin = async ()=>{
    const res = await postSignIn(id, password);
    localStorage.setItem('nickname', JSON.stringify(res.nickname));  
    localStorage.setItem('authToken', JSON.stringify(res.token)); 
    router.push("/"); 
  }
  
  return (
    <>
      <div className="container">
        <Container>
          <div className="login-nav">
            <div className="icon-box">
              <Image src="/icons/logo_fill_gradient.svg" layout="fill" />
            </div>
            <div className="text-logo-box">
              <Image src="/icons/text_logo_black.svg" layout="fill" />
            </div>
          </div>
          <h1 className="login-header">
            Log in.
          </h1>
          <p className="description">
            회원가입시 입력하신 정보로 로그인 하세요.
          </p>
          <div className="login-form">
            <div className="text-field">
              <input ref={inputRef} type="text" required onChange={(e)=>{setId(e.target.value)}}/>
              <span></span>
              <label>이메일</label>
            </div>
            <div className="text-field">
              <input type="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
              <span></span>
              <label>비밀번호</label>
            </div>
            <div className="pass">
              비밀번호를 잊으셨나요?
            </div>
            <button type="submit" value="Login" onClick={handleLogin}>Log in</button>
            <div className="signup-link">
              계정이 없으신가요? 
              <Link href="/login/signup">
                <a href="#">회원가입</a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <style jsx>{`
        .container{
          display:flex;
          justify-content:center;
        }
        .login-nav{
          display:flex;
          justify-content:flex-start;
          align-self:flex-start;
          margin-left:4em;
          margin-top:2em;
        }
        .icon-box{
          position:relative;
          width:23px;
          height:23px;
          margin-right:0.5em;
        }
        .text-logo-box{
          position:relative;
          margin-top:3px;
          width:70px;
          height:100%;
        }
        .login-header{
          margin-top:2em;
          margin-left:2em;
          align-self:flex-start;
          font-weight:normal;
        }
        .description{
          margin-top:0;
          align-self:flex-start;
          margin-left:4em;
          color:#adadad;
        }
        .login-form{
          align-self:flex-start;
          width:70%;
          margin-left:4em;
        }
        .text-field{
          position:relative;
          border-bottom:2px solid #adadad;
          margin: 30px 0;
        }
        .text-field input{
          width:100%;
          padding: 0 5px;
          height:40px;
          border: none;
          background: none;
          outline:none;
          font-size:0.9em;
          font-family:'GmarketSans';
        }
        .text-field label{
          position:absolute;
          top:30%;
          left:5px;
          color:#adadad;
          tranform: translateY(-50%);
          font-size:16px;
          pointer-events:none;
          transition: 0.5s;
        }
        .text-field span::before{
          content: '';
          position:absolute;
          top:40px;
          left:0;
          width:100%;
          height:2px;
          background: #B695F9;
          transition:0.5s;
        }
        .text-field input:focus ~ label,
        .text-field input:valid ~ label{
          top:-15px;
          color:#B695F9;
          font-size:20px;
        }
        .text-field input:focus ~ span::before,
        .text-field input:valid ~ span::before{
          width:100%;
        }
        .pass{
          font-size:14px;
          margin: -5px 0 20px 5px;
          color:#a6a6a6;
          cursor:pointer;
        }
        .pass:hover{
          text-decoration: underline;
        }
        button{
          margin-top:30px;
          width:100%;
          height:50px;
          border:1px solid white;
          background:#B695F9;
          border-radius:18px;
          font-size:18px;
          color:#e9f4fb;
          font-weight:700;
          cursor:pointer;
          outline:none;
        }
        button:hover{
          border-color:#B695F9;
          transition: 0.5s;
        }
        .signup-link{
          margin: 30px 0;
          text-align:center;
          font-size: 16px;
          color:#666666;
        }
        .signup-link a{
          color:#B695F9;
          text-decoration:none;
        }
        .signup-link a:hover{
          text-decoration: underline;
        }
      `}</style>
    </> 
  );
}

export default Login;