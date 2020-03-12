import React from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DashboardScreen from './Screens/DashboardScreen';
import Memory from './Screens/DashboardScreen/Memory';
import Linguistics from './Screen/DashboardScreen/Linguistics';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
            <HomeScreen/>
          </Route>
          <Route exact path={"/dashboard"}>
            <DashboardScreen/>
          </Route>
          <Route exact path={"/dashboard/memory"}>
            <Memory/>
          </Route>
          <Route exact path={"/dashboard/lingustics"}>
            <Linguistics/>
          </Route>
          <Route path="/*">
              <h1>The URL does not exist</h1>
          </Route>
      </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;
