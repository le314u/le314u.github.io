import React, { useState } from 'react';
import styles from './index.module.css'


export function Title({title, text, expanded = false}){
    return(
        <div className={styles.accordionItem}>
            <button aria-expanded={expanded?"true":"false"} ><span className={styles.accordionTitle}>{title}</span><span className={styles.icon} ></span></button>
            <div className={styles.accordionContent}>
                {text}
            </div>
        </div>
    )
}


export function Accordion({children}){
    const [openIndex,setIndex] = useState(-1)
    function handleOpen(key){
        if(openIndex == key){
            setIndex(-1)
        }else{
            setIndex(key)
        }

    }
    return (            
        <div className={styles.container}>
            <div className={styles.accordion}>
            {React.Children.map(children, (child, index) => (
                <div onClick={() => handleOpen(index)} key={index}>
                    {React.cloneElement(child, { expanded: openIndex === index })}
                </div>
            ))}
            </div>
        </div>  
    );
}



