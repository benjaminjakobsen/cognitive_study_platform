import React from 'react';
import './index.css';

function GeneralButton(props){
  return (
    <>

    <div className={"button"} style={{
      fontSize : "2.5rem",
      height : "auto",
      width : "auto",
      textAlign : "center",
      verticalAlign :"middle",
      borderRadius : "40px",
      color : "white",
      fontFamily : "Times New Roman",
      WebkitTextStrokeWidth : "0.3px",
      WebkitTextStrokeColor : "black"
    }}
    onClick={()=>{props.onClick()}}
    >
    <spam>{props.name}</spam>
    </div>
    </>
  );
}

export default GeneralButton;
