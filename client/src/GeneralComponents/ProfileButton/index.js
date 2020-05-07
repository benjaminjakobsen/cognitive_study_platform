import React from 'react';
import './index.css';
import {useHistory} from 'react-router-dom';
import icon from '../../assets/profile-icon1.png';
import { useState } from 'react';


function ProfileButton(props){
  const history = useHistory();
  const [render, setRender] = useState(false);
  return (
    <>
      <div className = "profile-button-container"
      onClick = {() => {
        if(render == true){
          setRender(false);
        }else{
          setRender(true);
        };
      }}>
        <img className = "image-container" src = {icon}></img>
      </div>
      
      {render ? [
        <div className = "profile-dropdown-container">
          <div id = "top-item" className = "profile-dropdown-item" onClick={() => {history.push("/profile/stats"); setRender(false)}}>Statistics</div>
          <div className = "profile-dropdown-item" onClick = {()=>{history.push("/profile/edit_profile"); setRender(false)}}>Edit Profile</div>
          <div id = "bot-item" className = "profile-dropdown-item" onClick={() => {localStorage.removeItem('token'); history.push("/")}}>Logout</div>
        </div>
      ] : null}
    </>
  );
}

export default ProfileButton;