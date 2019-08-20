import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import { Tabs, Tab } from 'components';

import styles from './MyAccountContainer.module.scss';

class MyAccountContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0,
    };
  }

  handleTabChange = (event, value) => this.setState({ currentTab: value });

  handleChangeIndex = value => this.setState({ currentTab: value });

  handleSocialLogin = type => () => {
    switch (type) {
    case 'fb':
      break;
    case 'google':
      break;
    default:
      break;
    }
  };

  handleSignup = payload => {
    // handle sign up
    console.log(payload);
  };

  handleSignin = payload => {};

  render() {
    let { currentTab } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          MY ACCOUNT
          <IconButton classes={{ root: styles.close }} aria-label="close">
            <CloseIcon />
          </IconButton>
        </div>
        <Tabs
          value={currentTab}
          onChange={this.handleTabChange}
          aria-label="styled tabs"
        >
          <Tab label="SIGN UP" />
          <Tab label="SIGN IN" />
        </Tabs>
        <SwipeableViews
          axis="x"
          index={currentTab}
          onChangeIndex={this.handleChangeIndex}
        >
          <SignupForm
            index={0}
            handleSocialLogin={this.handleSocialLogin}
            handleSignup={this.handleSignup}
          />
          <SigninForm
            index={1}
            handleSocialLogin={this.handleSocialLogin}
            handleSignin={this.handleSignin}
          />
        </SwipeableViews>
      </div>
    );
  }
}

export default MyAccountContainer;
