import React, {useState} from 'react';
import './index.css';
import {Route} from 'react-router-dom';
import MenuButton from '../../../GeneralComponents/MenuButton'
import {useHistory} from 'react-router-dom';
import ProfileButton from '../../../GeneralComponents/ProfileButton'

function Linguistics(props){
  const history = useHistory();
    return(
      <>
      <div className = "ling-menu-container">
        <MenuButton url = "/interactive/linguistics/word_testing" 
        colorOfText = "white" 
        left = "43vw"
        name = "Word Testing" onClick = {() => {
          history.push('/interactive/linguistics/word_testing')
        }}/>

        <MenuButton url = "/interactive/linguistics/right_word_in_context" 
        colorOfText = "white" 
        name = "Word in Context"
        left = "63vw" onClick = {() => {
          history.push('/interactive/linguistics/right_word_in_context')
        }}/>

        <MenuButton url = "/interactive/linguistics/word_classes" 
        colorOfText = "white" 
        name = "Word Classes"
        left = "23vw" onClick = {() => {
          history.push('/interactive/linguistics/word_classes')
        }}/>

        <ProfileButton/>
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
