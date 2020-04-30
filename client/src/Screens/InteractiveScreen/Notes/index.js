import React, {useState} from 'react';
import './index.css';
import {Route} from 'react-router-dom';
import MenuButton from '../../../GeneralComponents/MenuButton'
import {useHistory} from 'react-router-dom';

function Notes(props){
  const history = useHistory();
  return(
    <>
      <div className = "notes-menu-container">
        <MenuButton url = "/interactive/notes/notepad" 
        width = "15vw" 
        height = "6.25vh"
        colorOfText = "white" 
        left = "50vw"
        name = "Notepad" onClick = {() => {
          history.push('/interactive/notes/notepad')
        }}>
        </MenuButton>

        <MenuButton url = "/interactive/notes/note_organizing" 
        width = "15vw" 
        height = "6.25vh"
        colorOfText = "white" 
        name = "Note Organizing"
        left = "70vw" onClick = {() => {
          history.push('/interactive/notes/note_organizing')
        }}>
        </MenuButton>
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
