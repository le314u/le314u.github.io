import React from 'react';
import * as styles from './style.module.css';  // Importação correta para CSS Modules
// import './style.css';  // Importação correta para CSS Modules


function MyTips(props) {
  const { children,text } = props;

  return (
    <div className={styles.tooltip}>
      {children}
      <span className={styles.tooltiptext}>{text}</span>
    </div>
  );
}





export default MyTips;