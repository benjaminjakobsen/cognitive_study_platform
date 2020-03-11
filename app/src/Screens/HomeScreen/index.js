import React from 'react';
import './index.css';
import Login from './Login';
import {Route} from 'react-router-dom';



function HomeScreen(props){


  return (
    <>
      <div>
        Hello
      </div>
      <div>
        <Login></Login>
      </div>
      
      <Route exact path={`/dashboard`}/>
    </>
  );
}

export default HomeScreen;