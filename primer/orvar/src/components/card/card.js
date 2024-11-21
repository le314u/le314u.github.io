import React from "react";
import styles from './index.module.css'

export function Card({children,nameCard,urlImg,onClick}){
    return (
        <div className={styles.card} onClick={onClick}>
            {children}
            <img  tabIndex="0" src={urlImg}/>
            <span>{nameCard}</span>
        </div>
    )
}