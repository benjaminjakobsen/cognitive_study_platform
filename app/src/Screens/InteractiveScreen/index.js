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
  var [page, setPage] = useState("/interactive/linguistics");
  console.log(page);

  if(history.location.state == "newPage") {
    history.location.state = "";
    console.log(history.location.pathname);
    setPage(history.location.pathname);
  }
  if(page == "/interactive/memory")
    return ( <>
      <InteractiveMenu/>
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
