import Link from '@material-ui/core/Link/Link';
import React from 'react';

const Agreement = ({className}) => {
  return (
    <div className={className}>
      <span>By signing up, you agree to our </span>
      <Link href='#'>Privacy Policy</Link>
      <span> and </span>
      <Link href='#'>Terms of Service</Link>.
    </div>)
};

export default Agreement;