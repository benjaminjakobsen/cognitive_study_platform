import React from 'react';
import './index.css';
import {Route} from 'react-router-dom';
import SignIn from './SignIn'
import Register from './Register'



function HomeScreen(props){
  return (
    <>
    <div className = "main-container">
      <div className = "sign-in">
        <div className="header"> Sign In</div>
        <SignIn/>
      </div>
      <div className = "register">
        <div className="header">Register</div>
        <Register/>
      </div>
    </div>
    </>
  );
}

export default HomeScreen;
