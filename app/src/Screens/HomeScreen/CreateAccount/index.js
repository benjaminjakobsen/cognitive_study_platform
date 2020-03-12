import React from 'react';
import './index.css';
import {useHistory} from 'react-router-dom';
import GeneralButton from '../../../GeneralComponents/GeneralButton';

function CreateAccount(props){
  const history = useHistory();
  return (
    <>
    <div id="createBtn">
      <GeneralButton name="Create Account" size = "1rem"
      onClick = {() => {
        history.push("/dashboard")
      }}
      />
    </div>
    </>
  );
}

export default CreateAccount;
