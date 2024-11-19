import React from "react";
import styles from './index.module.css'

export function Card({children,nameCard,urlImg}){
    return (
        <div className={styles.card}>
            {children}
            <img src={urlImg}/>
            <span>{nameCard}</span>
        </div>
    )
}