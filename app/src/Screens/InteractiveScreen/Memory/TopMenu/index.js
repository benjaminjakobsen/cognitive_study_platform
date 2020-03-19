import React from 'react';
import './index.css';
import palace from '../../../../assets/palace.png'
import {useHistory} from 'react-router-dom';

function TopMenu(props){
  const history = useHistory();
  return (
    <>
    <div className = {"TopMenu-container"}>
      <div className = {"TopMenu-centered-item"}
      onClick={() => {
        history.push(`/interactive/memory/memory_palace`)
      }}>
        Memory palace
      </div>

      <div className = {"TopMenu-centered-item"}
      onClick={() => {
        history.push('/interactive/memory/dual_n_back')
      }}>
        Dual N-back
      </div>

      <div className = {"TopMenu-centered-item"}
      onClick={() => {
        history.push(`/interactive/memory/flashcards`)
      }}>
        Flashcards
      </div>
    </div>
    </>
  );
}

export default TopMenu;
