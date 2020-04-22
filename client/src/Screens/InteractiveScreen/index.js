import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import Memory from './Memory';
import Linguistics from './Linguistics'
import Notes from './Notes'
import Logic from './Logic'
import InteractiveMenu from './InteractiveMenu'

function InteractiveScreen(props){
  return( <>
    <Route exact path ="/interactive/memory">
      <InteractiveMenu/>
      <Memory/>
    </Route>
    <Route exact path ="/interactive/memory/*">
      <InteractiveMenu/>
      <Memory/>
    </Route>
    <Route exact path ="/interactive/logic">
      <InteractiveMenu/>
      <Logic/>
    </Route>
    <Route exact path ="/interactive/logic/*">
      <InteractiveMenu/>
      <Logic/>
    </Route>
    <Route exact path ="/interactive/linguistics">
      <InteractiveMenu/>
      <Linguistics/>
    </Route>
    <Route exact path ="/interactive/linguistics/*">
      <InteractiveMenu/>
      <Linguistics/>
    </Route>
    <Route exact path ="/interactive/notes">
      <InteractiveMenu/>
      <Notes/>
    </Route>
    <Route exact path ="/interactive/notes/*">
      <InteractiveMenu/>
      <Notes/>
    </Route>

    
  </>
  );
}
export default InteractiveScreen;
