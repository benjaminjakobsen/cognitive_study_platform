import React from 'react';
import './index.css';
import {useHistory} from 'react-router-dom';

function TopMenu(props){
  const history = useHistory();
  return (
    <>
    <div className = {"TopMenu-container"}>
      <div className = {"TopMenu-centered-item"}
      onClick={() => {
        history.push(`/interactive/linguistics/word_testing`)
      }}>
        Word testing
      </div>

      <div className = {"TopMenu-centered-item"}
      onClick={() => {
        history.push('/interactive/linguistics/right_word_in_context')
      }}>
        Right word in context
      </div>

      <div className = {"TopMenu-centered-item"}
      onClick={() => {
        history.push('/interactive/linguistics/word_classes')
      }}>
        Word classes
      </div>
    </div>
    </>
  );
}

export default TopMenu;
