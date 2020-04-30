import React from 'react';
import './index.css';

function MenuButton(props){
  return (
    <>

    <div className = "menuButton" style = {{
      fontSize : props.fontSize,
      height : props.height,
      width : props.width,
      textAlign : "center",
      color : props.colorOfText,
      boxShadow : window.location.pathname == props.url ? "0px 2px 2px 1px black" : "unset",
      backgroundColor : props.color,
      left : props.left
    }}
      onClick={()=>{props.onClick()}}>
      <span>{props.name}</span>
    </div>
    </>
  );
}

export default MenuButton;