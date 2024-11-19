import React from 'react';
import styles from "./index.module.css"


export function Block({children,emphasis,id }){
    return (
        <div id={id} className={styles.block}> 
            <div className={styles.content}>{children}</div>          
        </div>
    )
}

