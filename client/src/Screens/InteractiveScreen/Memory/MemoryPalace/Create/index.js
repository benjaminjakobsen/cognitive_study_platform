import React, { useState, useRef } from 'react';
import './index.css';
import { makeStyles} from '@material-ui/core/styles';
import {Button, Fab, List, ListItem, ListItemIcon,ListItemText, Modal, TextField, Divider, IconButton} from "@material-ui/core";
import axios from 'axios';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {useHistory} from 'react-router-dom';

const styles = {
  createPalaceName : {
    position : "absolute",
    width : "10vw",
    left : "5vw",
    top : "5vh"
  },
  addItemBtn : {
    width : "5vw",
    top : "13vh",
    left : "7.5vw",
    fontSize : "0.75rem"
  },
  modal : {
    position : "absolute",
    width : "30vw",
    height : "100vh",
    backgroundColor : "white",
    right : "0"
  },
  modalHeader : {
    position : "relative",
    top : "2.5vh",
    left : "7.5vw",
    width : "15vw",
    height : "5vh",
    fontSize : "2rem",
    color : "black",
    textAlign : "center"
  },
  itemName : {
    position : "absolute",
    width : "10vw",
    left : "10vw",
    top : "15vh"
  },
  itemImage : {
    position : "absolute",
    width : "10vw",
    left : "10vw",
    top : "30vh"
  },
  itemLocation : {
    position : "absolute",
    width : "10vw",
    left : "10vw",
    top : "45vh"
  },
  itemDescription : {
    position : "absolute",
    width : "10vw",
    left : "10vw",
    top : "45vh"
  },
  divider : {
    position : "relative",
    top : "5vh"
  },
  submitItem : {
    position : "absolute",
    width : "7.5vw",
    left : "11.25vw",
    top : "60vh"
  },
  deleteIcon : {
    color : "red",
    "&.Mui-focused": {
      outline : "none"
    }

  }


}

const useStyles = makeStyles(styles);

function Create(props){
  const history = useHistory();
  const [itemModal, setItemModal] = useState(false);
  const [itemContent, setItemContent] = useState([]);
  const [itemContentNames, setItemContentNames] = useState([]);
  const palace = useRef(null);
  const itemName = useRef(null);
  const itemImage = useRef(null);
  const itemLocation = useRef(null);
  const classes = useStyles();
  var [token, setToken] = useState(localStorage.getItem('token'))
  const userConfig = {
    headers: {
      'Content-type': 'application/json'
    }
  }
  if(token) {
    userConfig.headers['token'] = token;
  }
  return (
    <>
    <div>
      <div className = "create-palace-header">
        Create memory palace
      </div>
      <div className = "create-palace-container">
        <TextField inputRef = {palace} className = {classes.createPalaceName} label = "Name of palace" id="outlined-basic" variant="outlined"/>
        <Button variant = "contained" className = {classes.addItemBtn} onClick={() => {
        setItemModal(true)}}>Add Item</Button>
      </div>
      <Button variant = "contained" className = "create-palace" onClick={() => {
        console.log(itemContent);
        axios.post('/api/users/createPalace', {
          "palaceName" : palace.current.value,
          "items" : itemContent
        }, {headers : userConfig.headers})
        .then(res => {console.log("success"); history.push({pathname : '/interactive/memory/memory_palace'})})
        .catch(res => {console.log("failure")})
      }}
      >Create Palace</Button>
      <Modal open={itemModal} onClose = {() => {setItemModal(false)}}>
        <div>
          <div className = {classes.modal}>
            <div className = {classes.modalHeader}>
            Add Item
            </div>
            <Divider className = {classes.divider}/>
            <TextField inputRef = {itemName} className = {classes.itemName} label = "Item" id="standard" variant="standard"/>
            <TextField inputRef = {itemImage} className = {classes.itemImage} label = "Image" id="standard" variant="standard"/>
            <TextField inputRef = {itemLocation} className = {classes.itemLocation} label = "Location" id="standard" variant="standard"/>
            <Button variant = "contained" className = {classes.submitItem} onClick={() => {
              let newItem = {
                "itemName" : itemName.current.value,
                "itemImage" : itemImage.current.value,
                "itemLocation" : itemLocation.current.value
              }
              setItemContent(oldContent => [...oldContent, newItem]);
              setItemContentNames(oldContent => [...oldContent,
              <li key = {itemContentNames.length} className = "list-item">
                <div className = "list-item-text">
                  {itemName.current.value}
                </div>
                <div className ="delete-icon-div">
                <IconButton className = {classes.deleteIcon} onClick = {() => {
                  setItemContentNames(itemContentNames.splice(itemContentNames.length, 1));
                  setItemContent(itemContent.splice(itemContentNames.length, 1));
                }}>
                  <HighlightOffIcon/>
                </IconButton>
                </div>
              </li>]);
              setItemModal(false);
            }}
            >Create item</Button>
          </div>
        </div>
      </Modal>
      <div className = "item-list-container">
        <div className ="item-list-header">
          Items
        </div>
        <Divider className = "item-list-divider"/>
        <ul className = "item-list">
          {itemContentNames}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Create;
