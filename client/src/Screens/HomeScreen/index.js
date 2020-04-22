import React, {useState} from 'react';
import './index.css';
import {Route} from 'react-router-dom';
import SignIn from './SignIn'
import Register from './Register'


function HomeScreen(props){
  var [state, setState] = useState("login");
  return (
    <>
      <div className = "leftside">
      <div className = "welcomeText"> Welcome </div>
      </div>
      <div className = "rightside">
      <div className = "header signin-header"> Sign In </div>
      <div className = "header or"> or </div>
      <div className = "header register-header"> Register </div>
        <div className = "content">
            <SignIn/>
            <Register/>
      </div>
      </div>



    </>
  );
}

export default HomeScreen;
