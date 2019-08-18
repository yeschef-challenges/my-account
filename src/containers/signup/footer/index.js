import React, { Component } from 'react';

import Styles from './style';

class Footer extends Component {
  render() {
    return (
      <div style={Styles.wrapper}>
        <span>By signing up, you agree to our</span><br/>
        <span><span style={Styles.link}>Privacy</span> <span style={Styles.link}>Policy</span> and <span style={Styles.link}>Terms of Service</span></span>
      </div>
    )
  }
}

export default Footer;