import { ReactComponent as FacebookLogo } from 'icons/facebookLogo.svg';
import { ReactComponent as GoogleLogo } from 'icons/googleLogo.svg';
import Button from '@material-ui/core/Button/Button';
import styles from 'atoms/Social.module.scss';
import React from 'react';

class Social {
  static FacebookBtn() {
    return (<Button variant="contained" color="primary">
      <div className={styles.social}><FacebookLogo/>use facebook</div>
    </Button>);
  };

  static GoogleBtn() {
    return (<Button variant="contained" color='secondary'>
      <div className={styles.social}><GoogleLogo/>use google</div>
    </Button>);
  };
}

export default Social;
