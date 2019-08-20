import React from 'react';
import styles from 'components/SignUp.module.scss';
import Button from '@material-ui/core/Button/Button';
import TextDivider from 'atoms/TextDivider';
import TextField from '@material-ui/core/TextField/TextField';
import Social from 'atoms/Social';
import {isEmail, isRequired, minLength} from 'utils/validators';
import Agreement from 'atoms/Agreement';

const formFields = [
  {
    name: 'Name',
    value: '',
    errorMessage: null,
    validators: [isRequired('Name')]
  },
  {
    name: 'Email',
    value: '',
    errorMessage: null,
    validators: [isRequired('Email'), isEmail]
  },
  {
    name: 'Password',
    value: '',
    errorMessage: null,
    helperText: 'At least 6 characters',
    validators: [isRequired('Password'), minLength(6)]
  }
];

const SignUp = () => {

  const [ form, setForm ] = React.useState(formFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    const clone = [ ...form];
    const updatedForm = clone.map((item) => {
      const [ errorMessage ] = item.validators.map((cb)=> cb(item.value)).filter(v => !!v);
      item.errorMessage = errorMessage;
      return item;
    });
    setForm(updatedForm);
  };

  const onChange = (e, i)=> {
    const clone = [ ...form];
    const targetInput = clone[i];
    targetInput.value = e.target.value;

    setForm(clone);
  };

  const onBlur = (e, i) => {
    const clone = [ ...form];
    const targetInput = clone[i];
    const [ errorMessage ] = targetInput.validators.map((cb)=> cb(targetInput.value)).filter(v => !!v);
    targetInput.errorMessage = errorMessage;
    setForm(clone);
  };

  const onFocus = (i) => {
    const clone = [ ...form];
    const targetInput = clone[i];
    targetInput.errorMessage = null;
    setForm(clone);
  };

  return (
    <div className={styles.sign_up}>
      <Social.FacebookBtn/>
      <Social.GoogleBtn/>
      <TextDivider>or</TextDivider>
      <form onSubmit={handleSubmit}>
        {form.map((field, i)=> {
          return (<TextField
            onChange={e => onChange(e, i)}
            onBlur={e => onBlur(e, i)}
            onFocus={() => onFocus(i)}
            key={field.name}
            margin="normal"
            placeholder={field.name}
            variant="outlined"
            helperText={field.errorMessage || field.helperText}
            error={!!field.errorMessage}
          />)
        })}
        <Button type='submit' className='withoutHover' variant="contained" onClick={handleSubmit}>
          sign up
        </Button>
      </form>
      <Agreement className={styles.agreement}/>
    </div>
  )
};

export default SignUp