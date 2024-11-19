import React from 'react';
import styles from './index.module.css'

export function Badget({children}){
    return (
        <>
        <div className={`${styles.badget} ${styles.target}`}>
            target
        </div>
        <div className={`${styles.badget} ${styles.triguer}`}>
            triguer
        </div>
        <div className={`${styles.badget} ${styles.hold}`}>
            hold
        </div>
        </>
    );
}