import React, {useState} from 'react';
import './index.css';
import {Route} from 'react-router-dom';
import SignIn from './SignIn'
import Register from './Register'


function HomeScreen(props){
  var [state, setState] = useState(true);
  return (
    <>
      <div className = "leftside">
      <div className = "welcomeText"> Welcome </div>
      </div>
      <div className = "rightside">
        <div className = "headers">
          <div className = "header signin-header" style = {{
            backgroundColor : state == true ? "#FCF6F5FF" : "#989392",
            color : state == true ? "#001133" : "#6a6564"
          }} onClick = {() => {
            setState(true);
          }}> Sign In </div>
          <div className = "header divider"/>
          <div style = {{
            backgroundColor : state == false ? "#FCF6F5FF" : "#989392",
            color : state == false ? "#001133" : "#6a6564"
          }} className = "header register-header" onClick = {() => {
            setState(false);
          }}> Register </div>
        </div>
        <div className = "content">
            {state ? [
                <div className = "signin-content">
                  <SignIn/>
                </div>
              ] : [
                <div className = "register-content">
                  <Register/>
                </div>] }
        </div>
      </div>



    </>
  );
}

export default HomeScreen;
