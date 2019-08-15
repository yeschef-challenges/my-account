import React from "react";
import Button from "@material-ui/core/Button";
import {createMuiTheme} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {ThemeProvider} from "@material-ui/styles";
import facebookLogo from "../images/facebookLogo.svg"
import googleLogo from "../images/googleLogo.svg"
import DividerWithText from "../components/DividerWithText";
import {required, minLength, isEmail} from "../utils/validators";

class SignUp extends React.Component {
  defaultState = {
    values: {
      name: "",
      email: "",
      password: "",
    },
    errors: {
      name: null,
      email: null,
      password: null,
    },
    validationRules: {
      name: {required},
      email: {required, isEmail},
      password: {required, minLength: minLength(6)}
    },
    validationMessages: {
      name: {
        required: "Name is required"
      },
      email: {
        required: "Email is required",
        isEmail: "Please enter a valid email address"
      },
      password: {
        required: "Password is required",
        minLength: "Password needs to be at least 6 characters long"
      }
    },
  };

  constructor(props) {
    super(props);

    this.state = {...this.defaultState, ...(props.initialState ? props.initialState : {})};
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.validateAll = this.validateAll.bind(this);
  }

  handleChange(event) {
    const name = event.target.id;
    this.setState({values: {...this.state.values, [name]: event.target.value}});
  }

  validate(event, doNotSetState=false) {
    const name = event.target.id;
    let errors = {[name]: null};
    if (this.state.validationRules[name]) {
      let rules = Object.getOwnPropertyNames(this.state.validationRules[name]);
      while (!errors[name] && rules.length) {
        const rule = rules.splice(0, 1);
        if (!this.state.validationRules[name][rule](this.state.values[name])) {
          errors = {[name]: this.state.validationMessages[name][rule]};
        }
      }
    }
    if (doNotSetState) {
      return errors
    } else {
      this.setState({errors: {...this.state.errors, ...errors}});
    }
  }

  validateAll() {
    let errors = {};
    Object.getOwnPropertyNames(this.state.validationRules).forEach((fieldName) => {
      errors = {...errors, ...this.validate({target: {id: fieldName}}, true)};
    });
    this.setState({errors: {...this.state.errors, ...errors}});
  }

  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={localTheme}>
          <Button variant="contained" color="primary" style={styles.button.common}>
            <img src={facebookLogo} style={styles.socialIcon} alt="Login with Facebook Account"/> USE FACEBOOK
          </Button>
          <Button variant="contained" color="secondary" style={styles.button.common}>
            <img src={googleLogo} style={styles.socialIcon} alt="Login with Google Account"/> USE GOOGLE
          </Button>
        </ThemeProvider>
        <DividerWithText text="OR"/>
        <form noValidate autoComplete="off">
          <TextField
              error={!!this.state.errors.name}
              className={this.state.errors.name ? 'error' : ''}
              style={styles.textField}
              id="name"
              label="Name"
              value={this.state.values.name}
              onChange={this.handleChange}
              onBlur={this.validate}
              margin="normal"
              variant="outlined"
              helperText={this.state.errors.name}
          />
          <TextField
              error={!!this.state.errors.email}
              className={this.state.errors.email ? 'error' : ''}
              style={styles.textField}
              id="email"
              label="Email"
              value={this.state.values.email}
              onChange={this.handleChange}
              onBlur={this.validate}
              margin="normal"
              variant="outlined"
              helperText={this.state.errors.email}
          />
          <TextField
              error={!!this.state.errors.password}
              className={this.state.errors.password ? 'error' : ''}
              style={styles.textField}
              id="password"
              type="password"
              label="Password"
              value={this.state.values.password}
              onChange={this.handleChange}
              onBlur={this.validate}
              margin="normal"
              variant="outlined"
              helperText={this.state.errors.password ? this.state.errors.password : "At least 6 characters"}
          />
        </form>
        <ThemeProvider theme={signUpButton}>
          <Button
              variant="contained"
              color="primary"
              style={styles.button.common}
              onClick={this.validateAll}>
            SIGN IN
          </Button>
        </ThemeProvider>
        <div style={styles.disclaimer}>
          By signing up, you agree to our <br />
          <a href="#" style={styles.disclaimer.href}>Privacy Policy</a>
          &nbsp;and&nbsp;
          <a href="#" style={styles.disclaimer.href}>Terms of Service</a>.
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;

const localTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#4367B2"
    },
    secondary: {
      main: "#FFFFFF"
    }
  },
});

const signUpButton = createMuiTheme({
  palette: {
    primary: {
      main: "#FF007F"
    },
  },
});

const styles = {
  button: {
    common: {
      width: "100%",
      fontSize: 14,
      fontWeight: 600,
      height: 56,
      marginTop: 24,
      borderRadius: 6
    }
  },
  socialIcon: {
    height: 25,
    width: 25,
    padding: 10
  },
  textField: {
    width: "100%",
    height: 56,
    marginBottom: 0,
    marginTop: 25,
  },
  disclaimer: {
    color: "white",
    fontSize: 14,
    opacity: 0.8,
    textAlign: "center",
    padding: 25,
    alignSelf: 'start',
    href: {
      color: "white"
    }
  }
};