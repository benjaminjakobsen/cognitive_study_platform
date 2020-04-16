import React, {Component} from 'react';
import './index.css';

class SignIn extends Component {
  render() {
    return (
      <>
      <div className = "container">
        <form className = "white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className = "form-group">
            <label htmlFor = "username"> Username </label>
            <input type = "text" name = "username" placeholder = "username"/>
          </div>
          <div className = "form-group">
            <label htmlFor = "password"> Password </label>
            <input type = "password" name = "password" placeholder = "password"/>
          </div>
        </form>
        <div className = "input-field">
          <button className="login">
            Login
          </button>
        </div>
      </div>
      </>
    );
  }
}

export default SignIn;
