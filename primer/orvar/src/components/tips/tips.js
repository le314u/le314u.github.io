import React from 'react';
import styles from './style.module.css';  // Importação correta para CSS Modules
// import './style.css';  // Importação correta para CSS Modules


export function Tips({ children,text,urlImg } ) {

  return (
    <div className={styles.tooltip}>
      {children}
      {urlImg &&
        <div className={styles.tooltipImg}>
          <img tabIndex="0" src={urlImg} alt="Tooltip" />
        </div>
      }
      {text && 
        <span className={styles.tooltiptext}>{text}</span>
      }
    </div>
  );
  
}


export function Detach({ text, children } ) {

  return (
    <span className={styles.detach}>{text?text:children}</span>
  );
  
}

