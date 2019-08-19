import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from "./components/SIgnUpFormHeader";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4367B2'
    },
    secondary: {
      main: "#FF007F"
    },
    error: {
      main: '#CF6679'
    }
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
    </MuiThemeProvider>
  );
}

export default App;
