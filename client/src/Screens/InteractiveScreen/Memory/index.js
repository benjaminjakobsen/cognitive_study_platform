import React, {useState} from 'react';
import './index.css';
import TopMenu from './TopMenu';
import {Route} from 'react-router-dom';
import DualNBack from './DualNBack';
import MemoryPalace from './MemoryPalace';

function Memory(props){
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

      <Route exact path = {'/interactive/memory'}>
        <div id = "Header-container">
          <div className = "memory-header">
            Welcome to the memory page
          </div>,
          <div className = "memory-header">
            <h2>Choose category above to get started!</h2>
          </div>
        </div>
      </Route>

      <Route exact path = {`/interactive/memory/memory_palace`}>
        <MemoryPalace/>
      </Route>
      <Route exact path = {`/interactive/memory/dual_n_back`}>
        <DualNBack/>
      </Route>      
      
    </>
  )
}
export default Memory;
