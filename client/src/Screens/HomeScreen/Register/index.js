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
        <Form.Group>
          <Form.Label style = {{color : "white"}}> Username </Form.Label>
          <Form.Control className = "group2" type="text" ref={usernameRef}/>
        </Form.Group>
        <Form.Group>
          <Form.Label style = {{color : "white"}}> Email </Form.Label>
          <Form.Control className = "group2" type="email" ref={emailRef}/>
        </Form.Group>
        <Form.Group>
          <Form.Label style = {{color : "white"}}> Password </Form.Label>
          <Form.Control className = "group2" type="password" ref={passwordRef}/>
        </Form.Group>
        <Form.Group>
          <Form.Label style = {{color : "white"}}> Confirm Password </Form.Label>
          <Form.Control className = "group2" type="password" ref={confirmPasswordRef}/>
        </Form.Group>
        <Button className = "create-account" variant ="secondary" onClick = {() => {if(passwordRef.current.value != confirmPasswordRef.current.value){
          alert("Passwords must match");
        }
        else{
          axios.post('/api/users/register', {
            "username" : usernameRef.current.value,
            "password" : passwordRef.current.value,
            "email" : emailRef.current.value
          })
          .then((res) => {
            localStorage.setItem('token', res.data.token);
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
