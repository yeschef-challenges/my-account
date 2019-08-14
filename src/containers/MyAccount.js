import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { ThemeProvider } from '@material-ui/styles';
import SignUp from "./SignUp";
import Text from "../components/Text";
import Shape from "../components/Shape";
import TabContainer from "../components/TabContainer";

class MyAccount extends React.Component {
  state = {
    value: 0,
  };

  render() {
    return (
        <Container fixed style={styles.container}>
          <Container style={styles.row}>
            <Text type='heading' text='MY ACCOUNT'/>
            <Shape type='close' />
          </Container>
          <ThemeProvider theme={localTheme}>
            <Tabs
                value={this.state.value}
                style={styles.tabsContainer}
            >
              <Tab label="SIGN UP" style={styles.tabs}/>
              <Tab label="SIGN IN" style={{...styles.tabs, ...styles.tabs.inactive}}  />
            </Tabs>
            <TabContainer>
              <SignUp />
            </TabContainer>
          </ThemeProvider>
        </Container>
    );
  }
}

export default MyAccount;

const styles = {
  container: {
    width: 375,
    height: 812,
    padding: 0,
    backgroundColor: '#1e1e1e'
  },
  row: {
    display: 'flex',
    flex: 1,
    padding: 24,
    alignItems: 'start',
    justifyItems: 'start'
  },
  tabsContainer: {
    height: 35,
    minHeight: 35
  },
  tabs: {
    height: 35,
    minHeight: 35,
    flex: 1,
    color: 'white',
    fontWeight: 600,
    fontSize: '14px',
    padding: 0,
    inactive: {
      borderBottom: 'solid 2px #929292',
      color: '#929292'
    }
  }
};

const localTheme = createMuiTheme({
  palette: {
    type: 'dark',
    secondary: {
      main: '#FF007F'
    }
  },
});