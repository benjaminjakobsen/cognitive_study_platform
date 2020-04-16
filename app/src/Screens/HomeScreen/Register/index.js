import React from 'react';
import './index.css';
import {Form, Button} from 'react-bootstrap'

function Register(props){
  return (
    <>
    <div className = "register-container">
      <Form>
        <Form.Group className = "group">
          <Form.Label> Username </Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className = "group">
          <Form.Label> Email </Form.Label>
          <Form.Control type="email"/>
        </Form.Group>
        <Form.Group className = "group">
          <Form.Label> Password </Form.Label>
          <Form.Control type="password"/>
        </Form.Group>
        <Form.Group className = "group">
          <Form.Label> Confirm Password </Form.Label>
          <Form.Control type="password"/>
        </Form.Group>
        <Button variant ="secondary">
        Create Account
        </Button>
      </Form>
    </div>
    </>
  );
}

export default Register;
