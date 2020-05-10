import React, {useRef, useState} from 'react';
import './index.css';
import InteractiveMenu from '../InteractiveScreen/InteractiveMenu'
import MenuButton from '../../GeneralComponents/MenuButton'
import {useHistory} from 'react-router-dom';
import Statistics from './Statistics';
import EditProfile from './EditProfile';
import {Route} from 'react-router-dom';
import ProfileButton from '../../GeneralComponents/ProfileButton';
import axios from 'axios';

function ProfileScreen(props){
  const history = useHistory();
  var [token, setToken] = useState(localStorage.getItem('token'))
  return (
    <>
      <InteractiveMenu/>

      <div className = "profile-menu-container">
        <MenuButton url = "/profile/edit_profile" 
        colorOfText = "white" 
        left = "43vw"
        name = "Edit profile" onClick = {() => {
          history.push('/profile/edit_profile')
        }}/>

        <MenuButton url = "/profile/stats" 
        colorOfText = "white" 
        name = "Statistics"
        left = "63vw" onClick = {() => {
          history.push('/profile/stats')
        }}/>

        <ProfileButton/>
      </div>   

      <Route exact path = {`/profile/edit_profile`}>
        <EditProfile/>
      </Route>
      <Route exact path = {`/profile/stats`}>
        <Statistics/>
      </Route>
    </>
  );
}

export default ProfileScreen;