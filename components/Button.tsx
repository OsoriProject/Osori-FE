interface ButtonProps{
  label:string,
  fontSize?:number,
}

function Button({ButtonProps}:{ButtonProps:ButtonProps}): JSX.Element{
  return (
    <>
      <button style={{fontSize:`${ButtonProps.fontSize? ButtonProps.fontSize + 'em' : ''}`}}>
        {ButtonProps.label}
      </button>
      <style jsx>
        {`
          button{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content:center;
            padding: 12px;
            color:white;
            cursor:pointer;
            /* secondary color */
            width:100%;
            background: #B695F9;
            border-radius: 10px;
            border:none;
            font-family: 'GmarketSans',
            transition: all 0.5s;
          }
          button:hover{
            background: violet;
            transition: all 0.5s;
          }
        `}
      </style>
    </>
  )
}
export default Button;