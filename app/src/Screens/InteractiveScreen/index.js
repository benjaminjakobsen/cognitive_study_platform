import React, { useState } from 'react';
import './index.css';
import Memory from './Memory';
import Linguistics from './Linguistics';
import Logic from './Logic';
import Notes from './Notes'
import InteractiveMenu from './InteractiveMenu'
import {withRouter} from 'react-router';
import {useHistory} from 'react-router-dom';

function InteractiveScreen(props){
  let history = useHistory();
  var [renderTop, setRenderTop] = useState(true);
  var [page, setPage] = useState("");
  console.log(history.location.state);
  if(history.location.state == "newPage") {
    history.location.state = "";
    setPage(history.location.pathname);
    console.log(history.location.pathname)
  }
  if(page == "/interactive/memory")
    return ( <>
      <InteractiveMenu/>/interactive
      <Memory/>
    </>
    );
  else if(page == "/interactive/linguistics") {
    return ( <>
      <InteractiveMenu/>
      <Linguistics/>
    </>
    );
  }
  else if(page == "/interactive/logic") {
    return ( <>
      <InteractiveMenu/>
      <Logic/>
    </>
    );
  }
  else if(page == "/interactive/notes") {
    return ( <>
      <InteractiveMenu/>
      <Notes/>
    </>
    );
  }
  else {
    return ( <>

    </>
    );
  }
}

export default InteractiveScreen;
