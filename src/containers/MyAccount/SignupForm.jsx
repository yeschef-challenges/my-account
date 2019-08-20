import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Formik } from 'formik';

import { SocialButton } from 'components';

import styles from './MyAccountContainer.module.scss';

import FacebookLogo from 'assets/facebookLogo.svg';
import GoogleLogo from 'assets/googleLogo.svg';

const SignupForm = ({ handleSocialLogin, handleSignup }) => {
  // input validation
  const validate = values => {
    let errors = {};
    // checking if name is empty
    if ( !values.name ) {
      errors.name = 'Name Required';
    }

    // checking if email is empty
    if ( !values.email ) {
      errors.email = 'Email Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid Email';
    }

    // checking if password is empty
    if ( !values.password ) {
      errors.password = 'Password Required';
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    handleSignup(values);
    setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <SocialButton
        containerStyle={cn(styles.btnSocial, styles.btnFacebook)}
        icon={FacebookLogo}
        text={'USE FACEBOOK'}
        onClick={handleSocialLogin('fb')}
      />
      <SocialButton
        containerStyle={cn(styles.btnSocial, styles.btnGoogle)}
        icon={GoogleLogo}
        text={'USE GOOGLE'}
        textStyle={styles.btnGoogleText}
        onClick={handleSocialLogin('google')}
      />
      <div className={styles.divider}>
        <div className={styles.line} />
        <span>OR</span>
        <div className={styles.line} />
      </div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder='Name'
              className={ styles.input }
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <div className={ styles.errorInfo }>
              {errors.name && touched.name && errors.name}
            </div>
            <input
              type="email"
              name="email"
              placeholder='Email'
              className={ styles.input }
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <div className={ styles.errorInfo }>
              {errors.email && touched.email && errors.email}
            </div>
            <input
              type="password"
              name="password"
              placeholder='Password'
              className={ styles.input }
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <div className={ styles.errorInfo }>
              {errors.password && touched.password && errors.password}
            </div>
            <button type="submit" disabled={isSubmitting} className={ styles.btnSignup }>
              SIGN UP
            </button>
            <div className={ styles.desc }>
              By signing up, you agree to our
              <br/>
              <a href='#'>Privacy Policy</a>{' and '}<a href='#'>Terms of Service</a>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

SignupForm.propTypes = {
  handleSocialLogin: PropTypes.func,
  handleSignup: PropTypes.func,
};

export default SignupForm;
