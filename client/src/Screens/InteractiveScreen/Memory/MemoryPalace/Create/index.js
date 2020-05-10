import React, { useState } from 'react';
import './index.css';
import { makeStyles} from '@material-ui/core/styles';
import {Button, Fab, List, ListItem, ListItemIcon,ListItemText, Modal, TextField, Divider} from "@material-ui/core";

const styles = {
  createPalaceName : {
    position : "absolute",
    width : "10vw",
    left : "10vw",
    top : "7.5vh"
  },
  addItemBtn : {
    width : "5vw",
    top : "17.5vh",
    left : "12.5vw",
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
  }

}

const useStyles = makeStyles(styles);

function Create(props){
  const [itemModal, setItemModal] = useState(false);
  const [itemContent, setItemContent] = useState([]);
  const classes = useStyles();
  return (
    <>
    <div>
      <div className = "create-palace-header">
        Create memory palace
      </div>
      <div className = "create-palace-container">
        <TextField className = {classes.createPalaceName} label = "Name of palace" id="outlined-basic" variant="outlined"/>
        <Button variant = "contained" className = {classes.addItemBtn} onClick={() => {
        setItemModal(true)}}>Add Item</Button>
      </div>
      <Modal open={itemModal} onClose = {() => {setItemModal(false)}}>
        <div>
          <div className = {classes.modal}>
            <div className = {classes.modalHeader}>
            Add Item
            </div>
            <Divider className = {classes.divider}/>
            <TextField className = {classes.itemName} label = "Item" id="standard" variant="standard"/>
            <TextField className = {classes.itemImage} label = "Image" id="standard" variant="standard"/>
            <TextField className = {classes.itemLocation} label = "Location" id="standard" variant="standard"/>
            <Button variant = "contained" className = {classes.submitItem} onClick={() => {
              setItemModal(true);
            }}
            >Create item</Button>
          </div>
        </div>
      </Modal>
      <div className = "itemListContainer">
        <ul className = "itemList">
        {itemContent}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Create;
