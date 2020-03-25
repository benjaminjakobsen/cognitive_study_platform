import React, { useState } from 'react';
import './index.css';
import Dropdown from 'react-bootstrap/Dropdown'

var indexes = [false, false, false, false, false, false, false, false, false]
var rounds = 10;

function game(){
  console.log(rounds);
  for(var i = 0; i < 9; i++){
    document.getElementById(i).style.backgroundColor = "white";
  }

  if(rounds > 0){
    document.getElementById(Math.ceil(Math.random() * 9) - 1).style.backgroundColor = "green";
    rounds -= 1;
    console.log(indexes);
    setTimeout(game, 1000);
  } 
  else{
    return(true);
  }
}

function DualNBack(props){
  var [N, setN] = useState(0);
  var [audio, setAudio] = useState(false);
  var [position, setPosition] = useState(false);
  var [start, setStart] = useState(true);
  var time = 0;

  return (
    <>
    <div id = "dropdown-container">
      <Dropdown>
        <Dropdown.Toggle  className="dropdown-class" variant="primary">
          Choose your N
        </Dropdown.Toggle>
        <Dropdown.Menu className ="dropdown-menu">
          <Dropdown.Item onSelect={() => {setN(2)}}>2</Dropdown.Item>
          <Dropdown.Item onSelect={() => {setN(3)}}>3</Dropdown.Item>
          <Dropdown.Item onSelect={() => {setN(4)}}>4</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>

    <div className = "wrapper">
      <div>
        {start ? [
          <div onClick = {() => 
            {setStart(false)
              game()
            }}>
          <spam className="start-btn-text">Click to start!</spam>
          <div className = "overlay"></div>
        </div>
        ] : null}
      </div>
      
      <div className = "game-container">
        <div id = "0" className = "grid-item"> </div>
        <div id = "1" className = "grid-item"> </div>
        <div id = "2" className = "grid-item"> </div>
        <div id = "3" className = "grid-item"> </div>
        <div id = "4" className = "grid-item"> </div>
        <div id = "5" className = "grid-item"> </div>
        <div id = "6" className = "grid-item"> </div>
        <div id = "7" className = "grid-item"> </div>
        <div id = "8" className = "grid-item"> </div>
      </div>
    </div>

    

    <div className = "dual-button-class" id = "audio-container" 
    onClick = {() => {setAudio(true)}}>
      Audio
    </div>

    <div className = "dual-button-class" id = "position-container"
    onClick = {() => {setPosition(true)}}>
      Position 
    </div>

    {/*setAudio(false), setPosition(false)*/}
    {console.log(N)}

    </>
  );
}

export default DualNBack;
