import React from 'react';
import './index.css';
import {useHistory} from 'react-router-dom';

function InteractiveMenu(props){
  const history = useHistory();
  return (
    <>
    <div id = "menu">
      <div id = "memoMenu" className="menuBtn" onClick = {() => {
        history.push( {
          pathname : "/interactive/memory",
          state : "newPage"
        })
      }}>
      Me
      </div>
      <div id = "logiMenu" className="menuBtn" onClick = {() => {
        history.push( {
          pathname : "/interactive/logic",
          state : "newPage"
        })
      }}>
      Lo
      </div>
      <div id = "lingMenu" className="menuBtn" onClick = {() => {
        history.push( {
          pathname : "/interactive/linguistics",
          state : "newPage"
        })
      }}>
      Li
      </div>
      <div id = "noteMenu" className="menuBtn" onClick = {() => {
        history.push( {
          pathname : "/interactive/notes",
          state : "newPage"
        })
      }}>
      No
      </div>

    </div>
    </>
  );
}

export default InteractiveMenu;
