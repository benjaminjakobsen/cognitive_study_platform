import React from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DashboardScreen from './Screens/DashboardScreen';
import InteractiveScreen from './Screens/InteractiveScreen';

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
        <Route path={"/interactive"}>
          <InteractiveScreen/>
        </Route>
        <Route path={"/interactive/*"}>
          <InteractiveScreen/>
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
