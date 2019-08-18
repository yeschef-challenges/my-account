import React, { Component } from 'react';

import Styles from './style';

class Divider extends Component {
  render() {
    return (
      <div style={Styles.wrapper}>
        <span style={Styles.line}></span>
        <span style={Styles.text}>OR</span>
        <span style={Styles.line}></span>
      </div>
    )
  }
}

export default Divider;