import React, { Component } from 'react';
import PageHeader from './header';
import Divider from './divider';
import PageFooter from './footer';

import TabHeader from '../../components/tabs/tabHeader';
import Button from '../../components/button';
import Input from '../../components/input';

import Styles from './styles';

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameLabel: 'Name is required',
      emailLabel: 'Email is required',
      passwordLabel: 'At least 6 characters',
      nameStatus: false,
      emailStatus: false,
    }
  }

  handleSignUp() {
    this.setState({
      nameStatus: false,
      emailStatus: false,
      passwordStatus: false,
      passwordLabel: 'At least 6 characters'
    })
    const name = this.refs.nameInput.refs.input.value.trim();
    if (name.length === 0) {
      this.setState({nameStatus: true});
    }
    const email = this.refs.emailInput.refs.input.value.trim();
    if (email.length === 0) {
      this.setState({emailStatus: true});
      this.setState({emailLabel: 'Email is required'});
    } else if(validateEmail(email) === false) {
      this.setState({emailStatus: true});
      this.setState({emailLabel: 'Please enter a valid email address'});
    }
    const password = this.refs.passwordInput.refs.input.value.trim();
    if (password.length === 0) {
      this.setState({passwordStatus: true});
      this.setState({passwordLabel: 'Password is required'});
    } else if(password.length < 6) {
      this.setState({passwordStatus: true});
      this.setState({passwordLabel: 'Password needs to be at least 6 characters long'});
    }
  }

  render() {
    return (
      <div style={Styles.wrapper}>
        <PageHeader />
        <div style={Styles.tabHeader}>
          <TabHeader isActive={true}>SIGN UP</TabHeader>
          <TabHeader>SIGN IN</TabHeader>
        </div>
        <div style={Styles.tabContent}>
          <Button formInput={true} bgColor="#4367B2" icon="assets/img/facebookLogo.svg">USE FACEBOOK</Button>
          <Button formInput={true} icon="assets/img/googleLogo.svg">USE GOOGLE</Button>
          <Divider />
          <Input 
            placeHolder="Name"
            label={this.state.nameLabel}
            onError={this.state.nameStatus}
            ref="nameInput"
            showLabel={this.state.nameStatus}
            labelStyle={Styles.errorLabel}
          />
          <Input 
            placeHolder="Email"
            ref="emailInput"
            label={this.state.emailLabel}
            onError={this.state.emailStatus}
            showLabel={this.state.emailStatus}
            labelStyle={Styles.errorLabel}
          />
          <Input 
            placeHolder="Password"
            label={this.state.passwordLabel}
            onError={this.state.passwordStatus}
            showLabel={true}
            ref="passwordInput"
            labelStyle={!this.state.passwordStatus ? Styles.label : Styles.errorLabel}
          />
          <Button formInput={true} bgColor="#FF007F" onClick={e => this.handleSignUp()}>SIGN UP</Button>
          <PageFooter />
        </div>
      </div>
    )
  }
}

export default SignUp;