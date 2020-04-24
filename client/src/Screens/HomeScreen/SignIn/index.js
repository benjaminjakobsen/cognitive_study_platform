import React, {useRef} from 'react';
import './index.css';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
function SignIn(props) {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  return (
    <>
    <div className = "login-container">
      <Form>
        <Form.Group className = "group">
          <Form.Control type="email" placeholder ="Enter email" ref={emailRef}/>
        </Form.Group>
        <Form.Group className = "group">

          <Form.Control type="Password" placeholder ="Enter password" ref={passwordRef}/>
          <Form.Text className ="text-muted">
          </Form.Text>
        </Form.Group>
        <Button className ="login-btn" variant ="secondary" onClick = {() => {
          axios.post('/api/users/login', {
            "password" : passwordRef.current.value,
            "email" : emailRef.current.value
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
