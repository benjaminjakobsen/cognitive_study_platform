import React, { useState } from 'react';
import './index.css';
import TopMenu from '../TopMenu'
import Dropdown from 'react-bootstrap/Dropdown'

function DualNBack(props){
  var [N, setN] = useState(0);
  var [audio, setAudio] = useState(false);
  var [position, setPosition] = useState(false);

  return (
    <>
    <div id = "dropdown-container">
      <Dropdown>
        <Dropdown.Toggle variant="primary">
          Choose your N
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onSelect={() => {setN(2)}}>2</Dropdown.Item>
          <Dropdown.Item onSelect={() => {setN(3)}}>3</Dropdown.Item>
          <Dropdown.Item onSelect={() => {setN(4)}}>4</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>

    <div id = "game-container">
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
