import Image from "next/image";
import Container from "../../components/Container";

const Register = () =>{
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
            Sign up.
          </h1>
          <p className="description">
            이메일, 비밀번호로 간편 회원가입 하세요. 
          </p>
          <div className="login-form">
            <form method="post">
              <div className="text-field">
                <input type="text" required />
                <span></span>
                <label>이메일</label>
              </div>
              <div className="text-field">
                <input type="password" required />
                <span></span>
                <label>비밀번호</label>
              </div>
              <div className="text-field">
                <input type="password" required />
                <span></span>
                <label>비밀번호 확인</label>
              </div>
              <input type="submit" value="Sign up" />
            </form>
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
          font-size:1em;
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
        input[type="submit"]{
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
        input[type="submit"]:hover{
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

export default Register;