import React from 'react';
import './index.css';
import MenuButton from '../MenuButton';
import {useHistory} from 'react-router-dom';
import icon from '../../assets/profile-icon1.png';


function ProfileButton(props){
  const history = useHistory();
  return (
    <>
      <div className = "profile-button-container"
      onClick = {() => {
        history.push('/profile/edit_profile');
      }}>
        <img className = "image-container" src = {icon}></img>
      </div>
    </>
  );
}

export default ProfileButton;