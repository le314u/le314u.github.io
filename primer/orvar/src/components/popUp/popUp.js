import React, { useState } from "react";
import styles from './index.module.css'

export function PopUp({children,visible,nameCard}){
    const [isVisible, setIsVisible] = useState(visible);

    function handleClose(){
        setIsVisible(!isVisible);
    }
    
    return (
        <>
        {isVisible ? (
            <div className={styles.targetContent}>
            <a onClick={handleClose} className={styles.close}/>
            <div className={styles.targetInner}>
                {children}
            </div>
            </div>
        ):null}
        </>)
}