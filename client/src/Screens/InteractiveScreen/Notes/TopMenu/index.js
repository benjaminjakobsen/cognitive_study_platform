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
        history.push(`/interactive/notes/notepad`)
      }}>
        Notepad
      </div>

      <div className = {"TopMenu-centered-item"}
      onClick={() => {
        history.push('/interactive/notes/note_organizing')
      }}>
        Note organizing
      </div>
    </div>
    </>
  );
}

export default TopMenu;
