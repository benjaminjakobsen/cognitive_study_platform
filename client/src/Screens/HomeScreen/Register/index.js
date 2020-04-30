import React, {useRef} from 'react';
import './index.css';
import {Form, Button} from 'react-bootstrap'
import axios from 'axios';
import {Route, useHistory} from 'react-router-dom';


function Register(props){
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const history = useHistory();
  return (
    <>
    <div className = "register-container">
      <Form>
        <Form.Group className = "group">
          <Form.Label> Username </Form.Label>
          <Form.Control type="text" ref={usernameRef}/>
        </Form.Group>
        <Form.Group className = "group">
          <Form.Label> Email </Form.Label>
          <Form.Control type="email" ref={emailRef}/>
        </Form.Group>
        <Form.Group className = "group">
          <Form.Label> Password </Form.Label>
          <Form.Control type="password" ref={passwordRef}/>
        </Form.Group>
        <Form.Group className = "group">
          <Form.Label> Confirm Password </Form.Label>
          <Form.Control type="password" ref={confirmPasswordRef}/>
        </Form.Group>
        <Button variant ="secondary" onClick = {() => {if(passwordRef.current.value != confirmPasswordRef.current.value){
          alert("Passwords must match");
        }
        else{
          axios.post('/api/users/register', {
            "username" : usernameRef.current.value,
            "password" : passwordRef.current.value,
            "email" : emailRef.current.value
          })
          .then((res) => {
            history.push({
              pathname : '/dashboard'
            })
          })}
        }}
        >
        Create Account
        </Button>
      </Form>
    </div>
    </>
  );
}

export default Register;
