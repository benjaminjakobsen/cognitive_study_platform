import React, {useState} from 'react';
import './index.css';
import TopMenu from './TopMenu';
import {Route} from 'react-router-dom';

function Notes(props){
  var [render, setRender] = useState(true);
  var [name, setName] = useState("upArrow");
  var [topPadding, setTopPadding] = useState("6.25vh");
  return(
    <>
      <div id = "topBtn" style = {{top : topPadding}} onClick = {() => {
        if(render) {
          setRender(false);
          setName("downArrow")
          setTopPadding("0vh");
        }
        else {
          setRender(true);
          setName("upArrow")
          setTopPadding("6.25vh");
        }
      }}>
      <i className={name}> </i>
      </div>

      {render ? [
        <div>
          <TopMenu />
        </div>
      ] : null}

      <Route exact path = {'/interactive/notes'}>
        <div id = "Header-container">
          <div className = "notes-header">
            Welcome to the notes page
          </div>,
          <div className = "notes-header">
            <h2>Choose category above to get started!</h2>
          </div>
        </div>
      </Route>
    </>
  );
}

export default Notes;
