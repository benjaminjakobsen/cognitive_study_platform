import React, {useState} from 'react';
import './index.css';
import TopMenu from './TopMenu';
import {Route} from 'react-router-dom';
import DualNBack from './DualNBack';
import MemoryPalace from './MemoryPalace';
import Flashcard from './Flashcard';

function Memory(props){
    var [render, setRender] = useState(true);
  
  if(render){
    return( 
      <>
      <div onClick={()=> setRender(false)}>
        <TopMenu />
      </div>

      <div id = "Header-container" >
        <h1>Welcome to the memory page</h1>
      </div>
      <div>
        <h2>Choose category above to get started!</h2>
      </div>
      
      <Route exact path = {`/dashboard/memory/flashcards`}>
        <Flashcard/>
      </Route>
      <Route exact path = {`/dashboard/memory/memory_palace`}>
        <MemoryPalace/>
      </Route>
      <Route exact path = {`/dashboard/memory/dual_n_back`}>
        <DualNBack/>
      </Route>
    </>
  );}

  else{
    return( 
      <>
        <TopMenu/>
      <Route exact path = {`/dashboard/memory/flashcards`}>
        <Flashcard/>
      </Route>
      <Route exact path = {`/dashboard/memory/memory_palace`}>
        <MemoryPalace/>
      </Route>
      <Route exact path = {`/dashboard/memory/dual_n_back`}>
        <DualNBack/>
      </Route>
    </>
    );}
}
export default Memory;
