import React from 'react';
export interface ContainerProps{
  children: JSX.Element | JSX.Element[]
  height?: number,
}
const Container = ({children, height}: ContainerProps) => {
  return (
    <>
      <div className="container">
        {children}
      </div>
      <style jsx>{`
        .container{
          display:flex;
          flex-direction: column;
          margin-top:4.2em;
          margin-bottom:4.2em;
          width: 608px;
          height: ${height? (667+height).toString()+"px" : "667px"};
          background: #FFFFFF;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 46px;
          justify-content:flex-start;
          align-items:center;
          padding-bottom:10px;
        }
        @media screen and (max-width: 768px){
          .container{
            width:80%;
          }
        }
      `}
      </style>
    </>
  );  
}

export default Container;