import React from 'react';
import styles from 'atoms/TextDivider.module.scss';

const TextDivider = ({ children}) => {
  return (
    <div className={styles.textDivider}>
      <hr className={styles.hr_element}/>
      <span className={styles.text}>{children}</span>
    </div>
  )
};

export default TextDivider;