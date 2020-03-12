import React from 'react';
import './index.css';

function GeneralButton(props){
  return (
    <>
<<<<<<< HEAD

    <div style={{
      fontSize : "1.5rem",
      height : "fit-content",
      width : "fit-content"
=======
    
    <div id = {props.color} className={"button"} style={{
      fontSize : "4.5rem", 
      height : "auto",
      width : "auto",
      textAlign : "center",
      verticalAlign :"middle",
      borderRadius : "40px",
      color : "white",
      fontFamily : "Times New Roman",
      WebkitTextStrokeWidth : "0.3px",
      WebkitTextStrokeColor : "black"

>>>>>>> refs/remotes/origin/master
    }}
    onClick={()=>{props.onClick()}}
    >
      <spam>{props.name}</spam>
    </div>
    </>
  );
}

export default GeneralButton;
