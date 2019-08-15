import React from "react";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/styles";
import CloseIcon from "@material-ui/icons/Clear";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./Register.css";
import SignUpForm from "./SignUpForm";

const styles = {
  container: {
    backgroundColor: "#1e1e1e",
    color: "white",
    maxWidth: "375pt",
    width: "100%",
    margin: "75px auto",
    height: "812pt",
    padding: "0",
    fontSize: '14pt'
  },
  closeIcon: {
    width: "20pt",
    height: "20.67pt"
  },
  tab: {
    fontSize: '14pt',
    fontWeight: '600',
    fontFamily: 'Open Sans'
  }
};

class Register extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
  }

  handleTab = (event, newTab) => {
    return this.setState({
      selectedTab: newTab
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.container} maxWidth="md">
        <div className="signup-form__heading">
          <p>MY ACCOUNT</p>
          <CloseIcon className={classes.closeIcon} />
        </div>
        <Tabs
          value={this.state.selectedTab}
          onChange={this.handleTab}
          centered
          variant="fullWidth"
          
        >
          <Tab className={classes.tab} label="SIGN UP" />
          <Tab className={classes.tab} label="SIGN IN" disabled />
        </Tabs>
        {this.state.selectedTab === 0 && <SignUpForm />}
      </Container>
    );
  }
}

export default withStyles(styles)(Register);
