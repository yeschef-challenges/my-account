import React from "react";
import PropTypes from "prop-types";

class Shape extends React.Component {
  render() {
    switch(this.props.type) {
      case 'close':
        return (
            <div style={styles.common}>
              <div style={{...styles.close, ...styles.close['before']}}/>
              <div style={{...styles.close, ...styles.close['after']}}/>
            </div>
        );
    }
  }
}

Shape.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Shape;

const styles = {
  common: {
    height: 14,
    width: 14,
    alignSelf: "end",
    position: "relative",
    cursor: "pointer"
  },
  close: {
    position: "absolute",
    height: 20,
    width: 1,
    left: 7,
    top: -2,
    backgroundColor: "white",
    before:{
      transform: "rotate(45deg)",
    },
    after: {
      transform: "rotate(-45deg)",
    },
  },
};
