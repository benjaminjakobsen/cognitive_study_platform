import React from 'react';
import './index.css';
import Login from './Login';
import CreateAccount from './CreateAccount';
import {Route} from 'react-router-dom';



function HomeScreen(props){
  return (
    <>
      <div id = "welcome">
        <h1> Welcome</h1>
        <p id = "Introtext"> This is the site of your dreams.</p>
      </div>
      <div id = "Container">
        <div id="Login-container">
          <input type="Email" placeholder="Email address"/>
          <br></br>
          <input type="password" placeholder="Password"/>
        </div>
        <div id="Create-acc-container">
          <input type="Email" placeholder="Email address"/>
          <br></br>
          <input type="password" placeholder="Password"/>
          <br></br>
          <input type="password" placeholder="Confirm password"/>
        </div>
      </div>
      <div id = "Login-btn">
        <Login></Login>
      </div>
      <div id = "Create-acc-btn">
        <CreateAccount></CreateAccount>
      </div>
      <Route exact path={`/dashboard`}/>
    </>
  );
}

export default HomeScreen;
