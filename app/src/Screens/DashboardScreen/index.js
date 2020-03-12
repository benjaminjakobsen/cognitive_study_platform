import React, { Component } from 'react';
import './index.css';
import Memory from './Memory';
import {Route, useHistory} from 'react-router-dom';
import GeneralButton from '../../GeneralComponents/GeneralButton';

function DashboardScreen(props){
const history = useHistory();

  return (
    <>

    <div>
      <GeneralButton name="Memory"
      onClick= {() => {
        history.push('/dashboard/memory')
      }}
      />
    </div>
    <div>
      <GeneralButton name="Linguistics"
      onClick = {() => {
        history.push('/dashboard/linguistics')
      }}
      />
    </div>
    <div>
      <GeneralButton name="Logic"
      onClick = {() => {
        history.push('/dashboard/logic')
      }}
      />
    </div>
    <div>
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
