import React, {useState, useEffect} from 'react';
import './App.scss';
import HomeScreen from './Screens/HomeScreen';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import DashboardScreen from './Screens/DashboardScreen';
import InteractiveScreen from './Screens/InteractiveScreen';
import ProfileScreen from './Screens/ProfileScreen';
import session from './authentication';


const PrivateRoute = ({component : Component, ...rest}) => {
  const [auth, setAuth] = useState(true);
  useEffect(() => {
    session().then((res) => {setAuth(res)});
  }, []);
  return (
  <Route {...rest} render={props =>

    (
    auth ? (
      <Component {...props}/>
    ) : (
      <Redirect to = {{pathname: '/'}} />
    )
  )}
  />);
}

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
            <HomeScreen/>
        </Route>
        <PrivateRoute exact path={"/dashboard"} component={DashboardScreen}/>
        <PrivateRoute path={"/interactive"} component={InteractiveScreen}/>
        <PrivateRoute path={"/interactive/*"} component={InteractiveScreen}/>
        <PrivateRoute path={"/profile"} component={ProfileScreen}/>
        <PrivateRoute path={"/profile/*"} component={ProfileScreen}/>
        <Route path="/*">
            <h1>The URL does not exist</h1>
        </Route>
      </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;
