import React, { Component } from 'react';

import Styles from './style';

class PageHeader extends Component {
  render() {
    return (
      <div style={Styles.wrapper}>
        <span>MY ACCOUNT</span>
        <img src="assets/img/close.svg" alt="close"/>
      </div>
    )
  }
}

export default PageHeader;