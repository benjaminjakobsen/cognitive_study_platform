import React, { Component, useState } from 'react';
import './index.css';
import {Route, useHistory} from 'react-router-dom';
import GeneralButton from '../../GeneralComponents/GeneralButton';
import background from '../../assets/background.jpg'
import {withRouter} from 'react-router';
import Memory from '../InteractiveScreen/Memory'
import session from '../../authentication'
import axios from 'axios';



async function DashboardScreen(props){
  const history = useHistory();
  var [auth, setAuth] = useState(false);
  await session(function auth() {
    setAuth(true);
  });
  console.log(auth);
  if(auth != false) {
    return (
      <>
      <div id = "Background-container">

        <img src={background} style={{height : "100%", width : "100%", overflow : "hidden", position : "relative"}}/>

        <div id = "header-text">
          <spam>
            MENU
          </spam>
        </div>

        <div id = "underline">
          <spam>
            _____
          </spam>
        </div>

        <div id = "memory" className = "button-class">
          <spam onClick= {() => {
            history.push({
              pathname : '/interactive/memory',
              state : "newPage"
            })

          }}> Memory
          </spam>
        </div>

        <div id = "linguistics" className = "button-class" >
          <spam onClick = {() => {
            history.push( {
              pathname : '/interactive/linguistics',
              state : "newPage"
            })
          }}> Linguistics
          </spam>
        </div>

        <div id = "logic" className = "button-class">
          <spam onClick = {() => {
            history.push( {
              pathname : '/interactive/logic',
              state : "newPage"
            })
          }}> Logic
          </spam>
        </div>

        <div id = "notes" className = "button-class">
          <spam onClick = {() => {
            history.push( {
              pathname : '/interactive/notes',
              state : "newPage"
            })
          }}> Notes
          </spam>
        </div>
      </div>
      </>
    );
  }
  else {
    history.push( {
      pathname :'/',
      state : "newPage"
    })
  }
}

export default withRouter(DashboardScreen);
