import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

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
