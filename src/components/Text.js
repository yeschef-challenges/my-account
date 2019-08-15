import React from 'react';
import PropTypes from "prop-types";

class Text extends React.Component {
  render() {
    return <div style={{...styles.common, ...styles[this.props.type]}}>{this.props.text}</div>;
  }
}

Text.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Text;

const styles = {
  common: {
    color: 'white'
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 600,
    width: 185,
    textAlign: 'left',
    alignSelf: 'start',
    flex: 1,
  },
};