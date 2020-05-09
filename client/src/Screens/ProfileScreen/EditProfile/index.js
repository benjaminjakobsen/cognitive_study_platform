import React, {useRef} from 'react';
import './index.css';
import axios from 'axios';
import {Button, Fab, List, ListItem, ListItemIcon,ListItemText, Modal, TextField, Divider} from "@material-ui/core";
import {Route, useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  editButton : {
    position : "absolute",
    top : "57vh",
    width : "10vw",
    height : "4vh",
    left : "15vw"
  }
}

const useStyles = makeStyles(styles);


function EditProfile(props){
  const classes = useStyles();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  return (
    <>
      <div className = "edit-profile-header">
        <p>Edit your account settings</p>
      </div>
      <div className = "edit-profile-container">
        <p id = "username-text" className = "edit-profile-text">Choose a new username below</p>
        <TextField inputRef = {usernameRef} className = "change-settings-username" label = "New Username" variant = "outlined"/>
        <p id = "password-text" className = "edit-profile-text">Choose a new password below</p>
        <TextField inputRef = {passwordRef} className = "change-settings-password" label = "New Password" variant = "outlined"/>
        <p id = "email-text" className = "edit-profile-text">Choose a new email below</p>
        <TextField inputRef = {emailRef} className = "change-settings-email" label = "New Email" variant = "outlined"/>
        <Button variant = "contained" className = {classes.editButton} onClick={() => {
          console.log(usernameRef.current.value);
          let token = localStorage.getItem('token');
          const config = {
            headers: {
              'Content-type': 'application/json'
            },
            body: {
              "username" : usernameRef.current.value,
              "password" : passwordRef.current.value,
              "email" : emailRef.current.value
            }
          }
          if(token) {
            config.headers['token'] = token;
          }
          axios.post('/api/users/edit', config.body, {headers: config.headers})
        }}>Update Settings</Button>
      </div>
    </>
  );
}

export default EditProfile;