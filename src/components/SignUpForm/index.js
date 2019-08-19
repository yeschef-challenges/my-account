import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/styles";
import FacebookIcon from "../../assets/facebookLogo.svg";
import GoogleIcon from "../../assets/googleLogo.svg";

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

const StyledInput = withStyles({
    root: {
        marginBottom: '24pt',
        '&:last-of-type': {
            marginBottom: '8pt'
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.7)',
            borderWidth: '0.5pt',
            borderRadius: '6pt'
        },
        '& input': {
            color: '#FFFFFF',
            fontFamily: 'Open Sans',
            height: '56pt',
            padding: '0 12pt',
        },
        '& p': {
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'Open Sans',
            fontWeight: '300',
            fontSize: '11pt'
        }
    }
})(TextField)

const signUpInputs = [
    {
        name: 'Name'
    },
    {
        name: 'Email'
    },
    {
        name: 'Password'
    },
]

const SignUpForm = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrros] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        handleErrors();
        if (!errors.length) {
            // submit
        }
    }

    const onBlur = (e) => {
        handleErrors();
    }

    const handleErrors = () => {
        const arr = [];
        if (!inputs.name) {
            arr.push({ message: "Name is required", name: "name" });
        }
        if (!inputs.email) {
            arr.push({ message: "Email is required", name: "email" });
        }
        if (!inputs.password) {
            arr.push({ message: "Password is required", name: "password" });
        }
        if (!arr.length) {
            if (/(.+)@(.+){2,}\.(.+){2,}/.test(inputs.email)) {
                // valid email
            } else {
                arr.push({ message: "Please enter a valid email address", name: "email" });
            }
            if (inputs.password.length < 6) {
                arr.push({ message: "Password needs to be at least 6 characters long", name: "password" });
            }
        }
        setErrros(arr);
    };

    const handleInputChange = (e, prop) => {
        const { value } = e.target;
        setErrros([]);
        setInputs({ ...inputs, [prop]: value });
    }

    const renderInputs = () => {
        return signUpInputs.map(input => {
            const { name } = input;
            const lowerCasedName = name.toLowerCase();
            const error = errors.find(err => err.name === lowerCasedName);
            let helperText;
            if (name === "password") {
                helperText = "At least 6 characters";
            }
            return (
                <StyledInput
                    placeholder={name}
                    name={lowerCasedName}
                    value={inputs[lowerCasedName]}
                    onChange={(e) => handleInputChange(e, lowerCasedName)}
                    error={error}
                    variant="outlined"
                    helperText={!error ? helperText : error.message}
                    onBlur={onBlur}
                />
            )
        })
    }

    const classes = useStyles();
    return (
        <form className={classes.form}
            onSubmit={onSubmit}
        >
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
            {renderInputs()}
            <Button
                className={classes.styledButton}
                variant="contained"
                color="secondary"
                onClick={onSubmit}
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

export default SignUpForm;
