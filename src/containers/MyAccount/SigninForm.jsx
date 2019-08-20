import React from 'react';
import PropTypes from 'prop-types';

import styles from './MyAccountContainer.module.scss';

const SigninForm = ({ handleSocialLogin, handleSignin }) => {
  return <div className={styles.container} />;
};

SigninForm.propTypes = {
  handleSocialLogin: PropTypes.func,
  handleSignin: PropTypes.func,
};

export default SigninForm;
