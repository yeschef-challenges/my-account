import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './SocialButton.module.scss';

const SocialButton = ({ containerStyle, icon, text, textStyle, onClick }) => {
  return (
    <div className={cn(styles.wrapper, containerStyle )}>
      <img src={icon} className={ styles.icon }/>
      <span className={cn(styles.text, textStyle)}>
        {text}
      </span>
    </div>
  );
};

SocialButton.propTypes = {
  containerStyle: PropTypes.string,
  icon: PropTypes.any,
  text: PropTypes.string,
  textStyle: PropTypes.string,
  onClick: PropTypes.func,
};

export default SocialButton;
