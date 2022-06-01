import React from 'react';
import Button from './Button';
export interface ModalProps{
  title: string, 
  proceedText?: string, 
  retreatText?: string,
}
const Modal = ({title, proceedText="예", retreatText="아니오"}: ModalProps) => {
  return(
    <>
      <div className="modal-container">
        <div className="title-container">
          {title}
        </div>
        <div className="button-container">
          <div className="button-wrapper">
            <button className="proceed-button">
              {proceedText}
            </button>
          </div>
          <div className="button-wrapper">
            <button className="retreat-button">
              {retreatText}
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .modal-container{
          position: absolute;
          background-color: #F4F4F4;
          width:400px;
          height: 220px;
          border-radius:45px;
          box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
        }
        .title-container{
          height: 50%;
          text-align:center;
          padding: 50px;
          font-size: x-large;
          line-height:60px;
        }
        .button-container{
          display:flex;
          justify-content: center;
          height:50%;
        }
        .button-wrapper{
          display:flex;
          width:100%;
          justify-content:center;
          padding-top:30px;
        }
        .proceed-button,
        .retreat-button{
          display: flex;
          flex-direction: row;
          justify-content:center;
          align-items: center;
          padding: 12px;
          color:white;
          cursor:pointer;
          /* secondary color */
          width:170px;
          max-width:170;
          min-width:150px;
          height:40px;
          border-radius: 100px;
          border: none;
          transition: all 0.5s;
          transform: scale(1);
        }
        .proceed-button:hover{
          transition: all 0.5s;
          transform: scale(1.05) perspective(1px)
        }
        .retreat-button:hover{
          transition: all 0.5s;
          transform: scale(1.05) perspective(1px)
        }
        .proceed-button{
          /* primary color */
          background-color:#68A5FF;
          margin-left:10px;
        }
        .retreat-button{
          background-color: white;
          color: black;
          margin-right:10px;
        }
      `}</style>
    </>
  );
}

export default Modal;