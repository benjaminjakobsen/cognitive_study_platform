import React from 'react';
import './index.css';

function Register(props){
  return (
    <>
    <div className = "login-header">Register</div>
    <form>
      <div className = "form-group">
        <label for = "email"> Email </label>
        <input type = "text" name = "email" placeholder = "email"/>
      </div>
      <div className = "form-group">
        <label for = "username"> Username </label>
        <input type = "text" name = "username" placeholder = "username"/>
      </div>
      <div className = "form-group">
        <label for = "password"> Password </label>
        <input type = "password" name = "password" placeholder = "password"/>
      </div>
    </form>
    <div className = "">
      <button type="button" class="login">
        Create Account
      </button>
    </div>
    </>
  );
}

export default Register;
