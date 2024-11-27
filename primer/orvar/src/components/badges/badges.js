import React, { useState } from 'react';
import styles from './index.module.css'

export function Badges({color,text,position}){
    const validPositions = ["LT", "RT", "LB", "RB"];
    const computedPosition = validPositions.includes(position.toUpperCase()) ? position : "LT";

    const style = {
      backgroundColor: color,
    };

    return (
        <>
        <div className={`${styles.badget} ${styles[computedPosition]}`} style={style}>
            {text}
        </div>
       
        </>
    );
}