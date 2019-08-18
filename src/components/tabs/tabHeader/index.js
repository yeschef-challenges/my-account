import React, { Component } from 'react';

import Styles from './style';

class TabHeader extends Component {
  render() {
    const {isActive} = this.props;
    const title = this.props.children;
    return (
      <div style={!isActive ? Styles.wrapper : Styles.activeWrapper}>
        <span>{title}</span>
      </div>
    )
  }
}

export default TabHeader;