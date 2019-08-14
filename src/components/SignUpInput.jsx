import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const StyledInput = withStyles({
  root: {
    margin: '10px 0',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(255, 255, 255, 0.7)',
      borderWidth: '0.5px'
    },
    '& input': {
      color: '#FFFFFF',
      fontFamily: 'Open Sans',
    },
    '& p': {
      color: 'rgba(255, 255, 255, 0.8)'
    }
  }
})(TextField)

export default function SignUpInput (props) {
  const changeHandler = (event) => {
    return props.handleChange(event.target.value)
  }
  let helperText;
  
  if (props.name === "password" && !props.error) {
    helperText = "At least 6 characters"
  }

  if (props.error) {
    helperText = props.error 
  }
  

  return <StyledInput
    label={props.label}
    value={props.value}
    onChange={changeHandler}
    name={props.name}
    error={!!props.error}
    variant="outlined"
    placeholder={props.placeholder}
    helperText={helperText}
  />
}
