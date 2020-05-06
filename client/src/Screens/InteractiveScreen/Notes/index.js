import React, {useState} from 'react';
import './index.css';
import {Route} from 'react-router-dom';
import MenuButton from '../../../GeneralComponents/MenuButton'
import {useHistory} from 'react-router-dom';
import ProfileButton from '../../../GeneralComponents/ProfileButton'

function Notes(props){
  const history = useHistory();
  return(
    <>
      <div className = "notes-menu-container">
        <MenuButton url = "/interactive/notes/notepad" 
        colorOfText = "white" 
        left = "43vw"
        name = "Notepad" onClick = {() => {
          history.push('/interactive/notes/notepad')
        }}/>

        <MenuButton url = "/interactive/notes/note_organizing" 
        colorOfText = "white" 
        name = "Note Organizing"
        left = "63vw" onClick = {() => {
          history.push('/interactive/notes/note_organizing')
        }}/>
        
        <ProfileButton/>
      </div>

      <Route exact path = {'/interactive/notes'}>
        <div id = "Header-container">
          <div className = "notes-header">
            Welcome to the notes page
          </div>,
          <div className = "notes-header">
            <h2>Choose category above to get started!</h2>
          </div>
        </div>
      </Route>
    </>
  );
}

export default Notes;
