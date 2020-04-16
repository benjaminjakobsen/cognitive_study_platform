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
        history.push(`/interactive/logic/logical_puzzles`)
      }}>
        Logical Puzzles
      </div>

      <div className = {"TopMenu-centered-item"}
      onClick={() => {
        history.push('/interactive/logic/number_sequence')
      }}>
        Number Sequence
      </div>
    </div>
    </>
  );
}

export default TopMenu;
