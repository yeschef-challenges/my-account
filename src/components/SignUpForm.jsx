import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import FacebookIcon from "./facebookLogo.svg";
import GoogleIcon from "./googleLogo.svg";

import SignUpInput from "./SignUpInput";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "24pt"
  },
  styledButton: {
    borderRadius: "6pt",
    minHeight: "56pt",
    marginBottom: "24pt",
    fontSize: "14pt"
  },
  buttonIcon: {
    marginRight: "12pt",
    width: "25pt"
  },
  googleIcon: {
    width: "19pt"
  }
});

export default function SignUpForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = value => {
    setNameError("");
    return setName(value);
  };

  const handleEmailChange = value => {
    setEmailError("");
    return setEmail(value);
  };

  const handlePasswordChange = value => {
    setPasswordError("");
    return setPassword(value);
  };

  const handleSubmit = () => {
    if (!name) {
      return setNameError("Name is required");
    }
    if (!email) {
      return setEmailError("Email is required");
    }
    if (!password) {
      return setPasswordError("Password is required");
    }
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      // valid email
    } else {
      return setEmailError("Please enter a valid email address");
    }
    if (password.length < 6) {
      return setPasswordError(
        "Password needs to be at least 6 characters long"
      );
    }
  };

  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Button
        className={classes.styledButton}
        variant="contained"
        color="primary"
      >
        <img src={FacebookIcon} alt="facebook" className={classes.buttonIcon} />
        USE FACEBOOK
      </Button>
      <Button
        className={classes.styledButton}
        variant="contained"
        style={{ backgroundColor: "#FFFFFF", color: "#494949" }}
      >
        <img
          src={GoogleIcon}
          alt="google"
          className={`${classes.buttonIcon} ${classes.googleIcon}`}
        />
        USE GOOGLE
      </Button>
      <div className="signup-form__separator">
        <div className="separator separator--left" />
        <p className="separator__text">OR</p>
        <div className="separator separator--right" />
      </div>
      <SignUpInput
        placeholder="Name"
        name="name"
        value={name}
        handleChange={handleNameChange}
        error={nameError}
      />
      <SignUpInput
        placeholder="Email"
        name="email"
        value={email}
        handleChange={handleEmailChange}
        error={emailError}
      />
      <SignUpInput
        placeholder="Password"
        name="password"
        value={password}
        handleChange={handlePasswordChange}
        error={passwordError}
      />
      <Button
        className={classes.styledButton}
        variant="contained"
        color="secondary"
        onClick={handleSubmit}
      >
        SIGN UP
      </Button>
      <p className="privacy-policy-text">
        By signing up, you agree to our <a href="#">Privacy Policy</a> and{" "}
        <a href="#">Terms of Service.</a>
      </p>
    </form>
  );
}
