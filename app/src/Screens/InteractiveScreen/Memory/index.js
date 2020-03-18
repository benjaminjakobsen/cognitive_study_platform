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
    var [name, setName] = useState("^");
    return(
      <>
      <div id = "topBtn" >
        <GeneralButton name = {name} size = "4vh" onClick = {() => {
          if(render) {
            setRender(false);
            setName("˅")
          }
          else {
            setRender(true);
            setName("^")
          }
          console.log(render);
        }}/>
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
