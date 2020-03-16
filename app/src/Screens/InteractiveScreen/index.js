import React, { useState } from 'react';
import './index.css';
import Memory from './Memory';
import {withRouter} from 'react-router';
import {useHistory} from 'react-router-dom';

function InteractiveScreen(props){
  var [renderTop, setRenderTop] = useState(true);
  var [memory, setMemory] = useState(true);
  var [logic, setLogic] = useState(false);
  var [notes, setNotes] = useState(false);
  var [ling, setLing] = useState(false);

  let history = useHistory();
  
  if(true){
    return <>
      <Memory/>
    </>
  }
 else{
  return (
    <>
    </>
  );}
}

export default InteractiveScreen;