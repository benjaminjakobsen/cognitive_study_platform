import React, {Component} from 'react';
import './index.css';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
class SignIn extends Component {
  render() {
    return (
      <>
      <div className = "login-container">
        <Form>
          <Form.Group className = "group">
            <Form.Control type="text" placeholder ="Enter username"/>
          </Form.Group>
          <Form.Group className = "group">

            <Form.Control type="Password" placeholder ="Enter password"/>
            <Form.Text className ="text-muted">
            </Form.Text>
          </Form.Group>
          <Button className ="login-btn" variant ="secondary">
            Login
          </Button>
        </Form>
      </div>
      </>
    );
  }
}

export default SignIn;
