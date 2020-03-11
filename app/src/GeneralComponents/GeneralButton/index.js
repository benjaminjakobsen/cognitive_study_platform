import React from 'react';
import './index.css';

function GeneralButton(props){
  return (
    <>
    
    <div style={{
      fontSize : "1.5rem", 
      height : "fit-content",
      width : "fit-content"
    }}
    onClick={()=>{props.onClick()}}
    >
    <h3>{props.name}</h3>
    </div>
    </>
  );
}

export default GeneralButton;