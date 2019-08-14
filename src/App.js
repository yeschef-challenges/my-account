import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Register from "./components/Register";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4367B2'
    },
    secondary: {
      main: "#FF007F"
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Register />
    </MuiThemeProvider>
  );
}

export default App;