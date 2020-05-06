import React, {useRef} from 'react';
import './index.css';
import {Form, Button} from 'react-bootstrap';
import {Route, useHistory} from 'react-router-dom';
import axios from 'axios';
function SignIn(props) {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const history = useHistory();
  return (
    <>
    <div className = "login-container">
      <Form>
        <Form.Group>
          <Form.Label style = {{color : "white"}}> Email </Form.Label>
          <Form.Control className = "group" type="email" placeholder ="Enter email" ref={emailRef}/>
        </Form.Group>
        <Form.Group>
          <Form.Label style = {{color : "white"}}> Password </Form.Label>
          <Form.Control className = "form-control group" type="Password" placeholder ="Enter password" ref={passwordRef}/>
        </Form.Group>
        <Button className ="login-btn" variant ="secondary" onClick = {() => {
          axios.post('/api/auth/login', {
            "password" : passwordRef.current.value,
            "email" : emailRef.current.value
          }).then((response) => {
            localStorage.setItem('token', response.data.token);
            history.push({
              pathname : '/dashboard'
            })
          })
        }}>
          Login
        </Button>
      </Form>
    </div>
    </>
  );
}

export default SignIn;
