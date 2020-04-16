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
        history.push(`/interactive/memory/memory_palace`)
      }}>
        Memory palace
      </div>

      <div className = {"TopMenu-centered-item"}
      onClick={() => {
        history.push('/interactive/memory/dual_n_back')
      }}>
        N-back
      </div>
    </div>
    </>
  );
}

export default TopMenu;
