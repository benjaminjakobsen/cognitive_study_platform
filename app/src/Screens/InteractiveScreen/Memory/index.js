import React, {useState} from 'react';
import './index.css';
import TopMenu from './TopMenu';
import {Route} from 'react-router-dom';
import DualNBack from './DualNBack';
import MemoryPalace from './MemoryPalace';
import Flashcard from './Flashcard';
import GeneralButton from '../../../GeneralComponents/GeneralButton'


function Memory(props){
    var [header, setHeader] = useState(true);
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
        console.log(render);
      }}>
      <i className={name}> </i>
      </div>

      {render ? [
        <div onClick={()=> setHeader(false)}>
          <TopMenu />
        </div>
      ] : null}

      {header ? [
      <div id = "Header-container">
        <h1>Welcome to the memory page</h1>
      </div>,
      <div>
        <h2>Choose category above to get started!</h2>
      </div>] : null}

      <Route exact path = {`/interactive/memory/flashcards`}>
        <Flashcard/>
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
