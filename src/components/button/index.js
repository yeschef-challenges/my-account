import React, { Component } from 'react';

import Styles from './style';

class Button extends Component {
  render() {
    const {bgColor, icon, formInput,onClick} = this.props;
    const text = this.props.children;
    return (
      <div>
        <button style={{
          ...Styles.button, 
          backgroundColor: bgColor ? bgColor : '#FFFFFF',
          color: bgColor ? '#FFFFFF' : '#494949',
          marginBottom: formInput ? 24 : 0,
          }}
          onClick={onClick}>
          {
            icon ? <img src={icon} style={Styles.icon} alt="btn"/> : null
          }
          <span>{text}</span>
        </button>
      </div>
    )
  }
}

export default Button;