import React from 'react';
import './index.css';
import Login from './Login';
import CreateAccount from './CreateAccount';
import {Route} from 'react-router-dom';



function HomeScreen(props){
  return (
    <>
      <div id="login">
        <input type="Email" placeholder="Email address"/>
        <br></br>
        <input type="password" placeholder="Password"/>
        <Login></Login>
      </div>
      <div id="createAccount">
        <input type="Email" placeholder="Email address"/>
        <br></br>
        <input type="password" placeholder="Password"/>
        <br></br>
        <input type="password" placeholder="Confirm password"/>
        <CreateAccount></CreateAccount>
      </div>
      <Route exact path={`/dashboard`}/>
    </>
  );
}

export default HomeScreen;
