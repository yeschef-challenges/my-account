import React, { Component } from 'react';

import Styles from './style';

class Input extends Component {
  render() {
    const {placeHolder, label, showLabel, labelStyle, onError} = this.props;
    return (
      <div style={Styles.container}>
        <input style={!onError ? Styles.wrapper : Styles.error} placeholder={placeHolder} ref="input"/>
        <span style={{...labelStyle, visibility: showLabel ? 'visible' : 'hidden'}} ref="status">{label}</span>
      </div>
    )
  }
}

export default Input;