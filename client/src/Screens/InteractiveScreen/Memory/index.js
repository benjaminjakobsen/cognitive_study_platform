import React, {useState} from 'react';
import './index.css';
import {Route} from 'react-router-dom';
import DualNBack from './DualNBack';
import MemoryPalace from './MemoryPalace';
import MenuButton from '../../../GeneralComponents/MenuButton'
import {useHistory} from 'react-router-dom';
import Learn from './MemoryPalace/Learn';
import ProfileButton from '../../../GeneralComponents/ProfileButton'

function Memory(props){
    const history = useHistory();
    return(
      <>

      <div className = "memory-menu-container">
        <MenuButton url = "/interactive/memory/memory_palace" 
        colorOfText = "white" 
        left = "43vw"
        name = "Memory Palace" onClick = {() => {
          history.push('/interactive/memory/memory_palace')
        }}/>

        <MenuButton url = "/interactive/memory/dual_n_back" 
        colorOfText = "white" 
        name = "N-back"
        left = "63vw" onClick = {() => {
          history.push('/interactive/memory/dual_n_back')
        }}/>

        <ProfileButton/>
      </div>

      <Route exact path = {'/interactive/memory'}>
        <div id = "Header-container">
          <div className = "memory-header">
            Welcome to the memory page
          </div>,
          <div className = "memory-header">
            <h2>Choose category above to get started!</h2>
          </div>
        </div>
      </Route>

      <Route exact path = {`/interactive/memory/memory_palace`}>
        <MemoryPalace/>
      </Route>
      <Route exact path = {`/interactive/memory/dual_n_back`}>
        <DualNBack/>
      </Route>
      <Route exact path = {'/interactive/memory/memory_palace/learn'}>
        <Learn/>
      </Route>      
      
    </>
  )
}
export default Memory;
