import React, {useState} from 'react';
import './index.css';
import TopMenu from './TopMenu';
import {Route} from 'react-router-dom';

function Linguistics(props){
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

        <Route exact path = {'/interactive/linguistics'}>
          <div id = "Header-container">
            <div className = "linguistics-header">
              Welcome to the linguistics page
            </div>,
            <div className = "linguistics-header">
              <h2>Choose category above to get started!</h2>
            </div>
          </div>
        </Route>
      </>
  );
}

export default Linguistics;
