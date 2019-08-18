import React, { Component } from 'react';
import './App.css';

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onHandleSignup() {
    const name = this.refs.name.value.trim();
    if (name.length === 0) {
      document.getElementById('name').style.visibility = 'visible';
      this.refs.name.classList.add('error');
    }

    const email = this.refs.email.value.trim();
    if (email.length === 0) {
      document.getElementById('email').style.visibility = 'visible';
      this.refs.email.classList.add('error');
    } else if (validateEmail(email) === false) {
      document.getElementById('email').style.visibility = 'visible';
      document.getElementById('email').innerText = 'Please enter a valid email address'
      this.refs.email.classList.add('error');
    }

    const password = this.refs.password.value.trim();
    if (password.length === 0) {
      document.getElementById('password').style.visibility = 'visible';
      this.refs.password.classList.add('error');
    } else if (password.length < 6) {
      document.getElementById('password').classList.remove('pwd-error');
      document.getElementById('password').style.visibility = 'visible';
      document.getElementById('password').innerText = 'Password needs to be at least 6 characters long'
      this.refs.password.classList.add('error');
    }
  }

  removeErrorClass() {
    document.getElementById('name').style.visibility = 'hidden';
    document.getElementById('email').style.visibility = 'hidden';
    this.refs.name.classList.remove('error');
    this.refs.email.classList.remove('error');
    this.refs.password.classList.remove('error');
    document.getElementById('password').classList.add('pwd-error');
    document.getElementById('password').innerText = 'At least 6 characters';
  }

  render() {
    return (
      <div className="wrapper">
        <div className="login-title">
          <span>MY ACCOUNT</span>
          <span><img src='assets/img/close.svg'/></span>
        </div>
        <div className="login-tabs">
          <div className="tab-header">
            <div className="tab-link active">SIGN UP</div>
            <div className="tab-link">SIGN IN</div>
          </div>
          <div className="tab-content">
            <button className="btn btn-social-login facebook form-input">
              <img className="btn-icon" src="assets/img/facebookLogo.svg" />
              <span>USE FACEBOOK</span></button>
            <button className="btn btn-social-login form-input">
              <img className="btn-icon" src="assets/img/googleLogo.svg" />
              <span>USE GOOGLE</span>
            </button>
            <div className="form-input separator">
              <div className="hr"></div>
              <span className="orspan">OR</span>
              <div className="hr"></div>
            </div>
            <div className="form-input">
              <input className="input" placeholder="Name" ref="name" onChange={e => this.removeErrorClass()}></input>
              <label className="error-message" id="name">Name is required</label>
            </div>
            <div className="form-input">
              <input className="input" placeholder="Email" ref="email" onChange={e => this.removeErrorClass()}></input>
              <label className="error-message" id="email">Email is required</label>
            </div>
            <div className="form-input">
              <input className="input" placeholder="Password" ref="password" onChange={e => this.removeErrorClass()}></input>
              <label className="error-message pwd-error" id="password">At least 6 characters</label>
            </div>
            <div className="form-input">
              <button className="btn btn-social-login form-input signup" onClick={e => this.onHandleSignup()}>SIGN UP</button>
            </div>
            <div className="form-input policy">
              <span>By signing up, you agree to our</span><br/>
              <span className="underline">Privacy</span>&nbsp;
              <span className="underline">Policy</span> and 
              <span className="underline"> Terms of Service</span>.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
