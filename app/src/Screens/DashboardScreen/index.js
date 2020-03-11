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
    
    </>
  );
}

export default DashboardScreen;