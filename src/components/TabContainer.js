import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

class TabContainer extends React.Component {
  render() {
    return (
        <Container component="div" style={{ padding: "0 25px 25px 25px" }}>
          {this.props.children}
        </Container>
    );
  }
}

TabContainer.propTypes = {
  children: PropTypes.object.isRequired,
};

export default TabContainer;
