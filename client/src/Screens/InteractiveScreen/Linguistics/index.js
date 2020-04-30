import React, {useState} from 'react';
import './index.css';
import {Route} from 'react-router-dom';
import MenuButton from '../../../GeneralComponents/MenuButton'
import {useHistory} from 'react-router-dom';

function Linguistics(props){
  const history = useHistory();
    return(
      <>
      <div className = "ling-menu-container">
        <MenuButton url = "/interactive/linguistics/word_testing" 
        width = "15vw" 
        height = "6.25vh"
        colorOfText = "white" 
        left = "50vw"
        name = "Word Testing" onClick = {() => {
          history.push('/interactive/linguistics/word_testing')
        }}>
        </MenuButton>

        <MenuButton url = "/interactive/linguistics/right_word_in_context" 
        width = "15vw" 
        height = "6.25vh"
        colorOfText = "white" 
        name = "Word in Context"
        left = "70vw" onClick = {() => {
          history.push('/interactive/linguistics/right_word_in_context')
        }}>
        </MenuButton>

        <MenuButton url = "/interactive/linguistics/word_classes" 
        width = "15vw" 
        height = "6.25vh"
        colorOfText = "white" 
        name = "Word Classes"
        left = "30vw" onClick = {() => {
          history.push('/interactive/linguistics/word_classes')
        }}>
        </MenuButton>
      </div>

        <Route exact path = {'/interactive/linguistics'}>
          <div id = "Header-container">
            <div className = "linguistics-header">
              Welcome to the linguistics page
            </div>,
            <div className = "linguistics-header">
              <h2>Choose category above to get started!</h2>
            </div>
          </div>
        </Route>
      </>
  );
}

export default Linguistics;
