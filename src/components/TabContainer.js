import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

class TabContainer extends React.Component {
  render() {
    return (
        <Container component="div" style={{ padding: "0 24px 24px 24px" }}>
          {this.props.children}
        </Container>
    );
  }
}

TabContainer.propTypes = {
  children: PropTypes.object.isRequired,
};

export default TabContainer;
