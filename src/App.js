import React from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import Typography from '@material-ui/core/Typography/Typography';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Tab from '@material-ui/core/Tab/Tab';
import SignUp from 'components/SignUp';
import {ThemeProvider} from '@material-ui/styles';
import theme from 'theme-override';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button/Button';
import TabPanel from 'atoms/TabPanel';

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className='Container' maxWidth='xs'>
        <Button className='clear'>
          <ClearIcon/>
        </Button>
        <Typography component='h1' align='left' variant='h5' gutterBottom={true}>My account</Typography>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="sign up"/>
          <Tab label="sign in" disabled/>
        </Tabs>
        <TabPanel value={value} index={0}>
          <SignUp/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Sign in
        </TabPanel>
      </Container>
    </ThemeProvider>
  );
}

export default App;
