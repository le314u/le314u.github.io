import React from 'react';
import styles from "./index.module.css"


export function Block({children,text,emphasis,id }){
    return (
        <div id={id} className={`${styles.block} ${text?styles.text:''}`} > 
            <div className={styles.content}>{children}</div>          
        </div>
    )
}