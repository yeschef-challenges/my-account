import React from 'react';
import './SignUp.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import facebook from '../assets/facebookLogo.svg';
import google from '../assets/googleLogo.svg';

const useStyles = makeStyles(theme => ({
  primaryButton: {
    margin: theme.spacing(0),
    marginBottom: theme.spacing(3),
    width: '100%',
    height: '56px',
    backgroundColor: '#4367B2',
    fontWeight: '400',
  },
  defaultButton: {
    marginBottom: theme.spacing(3),
    backgroundColor: '#ffffff',
    width: '100%',
    height: '56px',
    fontWeight: '400'
  },
  signUpButton: {
    marginBottom: theme.spacing(3),
    backgroundColor: '#FF007F',
    width: '100%',
    height: '56px',
    fontWeight: '400',
    color: 'white'
  },
  input: {
    display: 'none',
  },
}));

const labelGroup = {
  require: {
    name: 'Name is required',
    email: 'Email is required',
    password: 'Password is required'
  },
  validation: {
    name: '',
    email: 'Please enter a valid email address',
    password: 'Password needs to be at least 6 characters long'
  }
}
  
function SignUp() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
    label: {
      name: '',
      email: '',
      password: ''
    },
    pwdLabelClassName: 'MuiFormHelperText-password active'
  });


  const signup = () => {
    setValues({ 
      ...values,
      label: getLabel(),
      pwdLabelClassName: 'MuiFormHelperText-password '
    });
  }

  const getLabel = () => {
    const { name, email, password } = values;
    let result = {
      name: '',
      email: '',
      password: ''
    };

    if (name === '') {
      result.name = labelGroup.require.name;
    } else {
      result.name = '';
    }
    
    if (email === '') {
      result.email = labelGroup.require.email;
    } else if (!validateEmail(email)) {
      result.email = labelGroup.validation.email;
    } else {
      result.email = '';
    }

    if (password === '') {
      result.password = labelGroup.require.password;
    } else if (password.length < 6) {
      result.password = labelGroup.validation.password;
    } else {
      result.password = '';
    }

    return result;
  }

  const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className="container">
      <div className="header">
        <h2 className="no-margin">MY ACCOUNT</h2>
        <a href="#!"><i className="material-icons">clear</i></a>
      </div>
      <div className="content">
        <Button variant="contained" color="primary" className={classes.primaryButton}>
          <img src={facebook} alt="facebook" className="fb-icon"></img>
          USE FACEBOOK
        </Button>
        <Button variant="contained" className={classes.defaultButton}>
          <img src={google} alt="google" className="fb-icon"></img>
          USE GOOGLE
        </Button>
        <div className="divider">
          <span>OR</span>
        </div>
        <TextField
          id="outlined-full-width"
          style={{ color: 'white' }}
          placeholder="Name"
          helperText={values.label.name}
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={handleChange('name')}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-full-width"
          style={{ color: 'white' }}
          placeholder="Email"
          helperText={values.label.email}
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={handleChange('email')}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-full-width"
          style={{ color: 'white' }}
          placeholder="Password"
          helperText={values.label.password}
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={handleChange('password')}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <label className={values.pwdLabelClassName}>At least 6 characters</label>
        <Button variant="contained" color="secondary" className={classes.signUpButton} onClick={signup}>
          SIGN UP
        </Button>
        <label className="description">By signing up, you agree to our <br/><span>Privacy</span> <span>Policy</span> and <a href="#!">Terms of Service</a>.</label>
      </div>
    </div>
  );
}

export default SignUp;