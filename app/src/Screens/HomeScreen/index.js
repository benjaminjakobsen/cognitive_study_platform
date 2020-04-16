import React from 'react';
import './index.css';
import {Route} from 'react-router-dom';
import SignIn from './SignIn'
import Register from './Register'



function HomeScreen(props){
  return (
    <>
    <div className = "info">
      <SignIn/>
    </div>
    </>
  );
}

export default HomeScreen;
