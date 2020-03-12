import React, { Component } from 'react';
import './index.css';
import Memory from './Memory';
import {Route, useHistory} from 'react-router-dom';
import GeneralButton from '../../GeneralComponents/GeneralButton';

function DashboardScreen(props){
const history = useHistory();

  return (
    <>
    <div className = "memory" >
      <GeneralButton name="Memory" size = "4.5rem"
      onClick= {() => {
        history.push('/dashboard/memory')
      }}
      />
    </div>
    <div className = "linguistics">
      <GeneralButton name="Linguistics"
      onClick = {() => {
        history.push('/dashboard/linguistics')
      }}
      />
    </div>
    <div className = "logic">
      <GeneralButton name="Logic"
      onClick = {() => {
        history.push('/dashboard/logic')
      }}
      />
    </div>
    <div className = "notes">
      <GeneralButton name="Notes"
      onClick = {() => {
        history.push('/dashboard/notes')
      }}
      />
    </div>

    </>
  );
}

export default DashboardScreen;
