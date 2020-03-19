import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import Memory from './Memory';
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
    
  </>
  );
}
export default InteractiveScreen;
