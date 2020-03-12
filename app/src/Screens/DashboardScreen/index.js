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
<<<<<<< HEAD
      <GeneralButton name="Memory" size = "4.5rem"
=======
      <GeneralButton name="Memory" size = "3rem"
>>>>>>> 47e9b08395cf25bce63fca3f922ffb3050979385
      onClick= {() => {
        history.push('/dashboard/memory')
      }}
      />
    </div>
    <div className = "linguistics">
      <GeneralButton name="Linguistics" size = "3rem"
      onClick = {() => {
        history.push('/dashboard/linguistics')
      }}
      />
    </div>
    <div className = "logic">
      <GeneralButton name="Logic" size = "3rem"
      onClick = {() => {
        history.push('/dashboard/logic')
      }}
      />
    </div>
    <div className = "notes">
      <GeneralButton name="Notes" size = "3rem"
      onClick = {() => {
        history.push('/dashboard/notes')
      }}
      />
    </div>

    </>
  );
}

export default DashboardScreen;
