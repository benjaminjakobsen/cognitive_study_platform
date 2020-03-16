import React, { Component, useState } from 'react';
import './index.css';
import Memory from './Memory';
import {Route, useHistory} from 'react-router-dom';
import GeneralButton from '../../GeneralComponents/GeneralButton';
import background from '../../assets/background.jpg'



function DashboardScreen(props){
const history = useHistory();

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
          history.push('/dashboard/memory')
        }}> Memory
        </spam>
      </div>

      <div id = "linguistics" className = "button-class" >
        <spam onClick = {() => {
          history.push('/dashboard/linguistics')
        }}> Linguistics
        </spam>
      </div>
      <div id = "logic" className = "button-class">
        <spam onClick = {() => {
          history.push('/dashboard/logic')
        }}> Logic
        </spam>
      </div>
      <div id = "notes" className = "button-class">
        <spam onClick = {() => {
          history.push('/dashboard/notes')
        }}> Notes
        </spam>
      </div>

      
    </div>
    

    </>
  );
}

export default DashboardScreen;
