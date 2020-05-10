import React from 'react';
import './index.css';
import { makeStyles} from '@material-ui/core/styles';
import {Button, Fab, List, ListItem, ListItemIcon,ListItemText, Modal, TextField, Divider} from "@material-ui/core";

const styles = {
  createPalaceName : {
    width : "10vw",
    left : "10vw"
  }
}

const useStyles = makeStyles(styles);

function Create(props){
  const classes = useStyles();
  return (
    <>
    <div className = "create-palace-header">
      Create memory palace
    </div>
    <div className = "create-palace-container">
      <TextField className = {classes.createPalaceName} label = "Name" id="outlined-basic" variant="outlined"/>
    </div>
    </>
  );
}

export default Create;
