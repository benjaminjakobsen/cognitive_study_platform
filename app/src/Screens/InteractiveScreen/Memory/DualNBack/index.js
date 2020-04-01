import React, { useState } from 'react';
import './index.css';
import Dropdown from 'react-bootstrap/Dropdown'

var rounds = 20;
var order = [[], []];
var n = 2;
var audio = false;
var position = false;
var score = [0, 0];

function setN(newN){
  n = newN;
}
function setPosition(pos){
  position = pos;
}
function setAudio(newAudio){
  audio = newAudio;
}

function game(){
  console.log(score);
  for(var i = 0; i < 9; i++){
    document.getElementById(i).style.backgroundColor = "white";
  }

  if(rounds > 0){
    setTimeout(function(){
      var pos = Math.ceil(Math.random() * 9) - 1;
      document.getElementById(pos).style.backgroundColor = "rgb(255, 195, 11)";
      order[0].unshift(pos);
      console.log(order[0]);
      rounds -= 1;
      setTimeout(checkPos, 950);
      setTimeout(game, 1000);}, 200);
  }
  else{
    return (true);
  }
}

function checkPos(){
  if(n > order[0].length && position == true){
    score[1] += 1;
  }
  else if(order[0].length >= n){
    if(order[0][n] == order[0][0] && position == true){
      score[0] += 1;
    }
    else if(order[0][n] == order[0][0] && position == false){
      score[1] += 1;
    }
    else if(order[0][n] != order[0][0] && position == true){
      score[1] += 1;
    }
  }
  setPosition(false);
}

function DualNBack(props){
  var [start, setStart] = useState(true);

  return (
    <div className = "background">
    <div id = "dropdown-container">
      <Dropdown>
        <Dropdown.Toggle  className="dropdown-class" variant="warning">
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
    </div>
  );
}

export default DualNBack;
