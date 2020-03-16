import React from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DashboardScreen from './Screens/DashboardScreen';
import Memory from './Screens/InteractiveScreen/Memory';
import Linguistics from './Screens/InteractiveScreen/Linguistics';
import Logic from './Screens/InteractiveScreen/Logic';
import Notes from './Screens/InteractiveScreen/Notes';
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
        <Route exact path={"/interactive"}>
          <InteractiveScreen/>
        </Route>
        <Route exact path={"/interactive/*"}>
          <InteractiveScreen/>
        </Route>
        <Route exact path={"/interactive/memory"}>
          <Memory/>
        </Route>
        <Route exact path={"/interactive/memory/*"}>
          <Memory/>
        </Route>
        <Route exact path={"/interactive/logic"}>
          <Logic/>
        </Route>
        <Route exact path={"/interactive/notes"}>
          <Notes/>
        </Route>
        <Route exact path={"/interactive/linguistics"}>
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
