import React from "react";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";

class DividerWithText extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Divider style={styles.divider} />
        <div style={styles.innerText}>{ this.props.text }</div>
        <Divider style={styles.divider} />
      </Container>
    );
  }
}

DividerWithText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default DividerWithText;

const styles = {
  container: {
    padding: "25px 0",
    display: "flex",
  },
  divider: {
    backgroundColor: "white",
    flex: 1,
    alignSelf: "center",
  },
  innerText: {
    color: "white",
    flex: 0,
    margin: "0 10px",
    fontWeight: 600,
  },
};