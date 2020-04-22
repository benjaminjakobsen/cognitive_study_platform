import React from 'react';
import './index.css';

function GeneralButton(props){
  return (
    <>

    <div className={"button"} style={{
      fontSize : props.size,
      height : "auto",
      width : "auto",
      textAlign : "center",
      verticalAlign :"middle",
      borderRadius : "40px",
      color : props.colorOfText, 
      fontFamily : props.font,
      WebkitTextStrokeWidth : "0.3px",
      WebkitTextStrokeColor : "black",
      backgroundColor : props.background
    }}
    onClick={()=>{props.onClick()}}
    >
      <spam>{props.name}</spam>
    </div>
    </>
  );
}

export default GeneralButton;
