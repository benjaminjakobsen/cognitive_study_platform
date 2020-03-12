import React from 'react';
import './index.css';
import TopMenu from './TopMenu';
import {Route} from 'react-router-dom';
import DualNBack from './DualNBack';
import MemoryPalace from './MemoryPalace';
import Flashcard from './Flashcard';

function Memory(props){
  return (
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
  );
}

export default Memory;
