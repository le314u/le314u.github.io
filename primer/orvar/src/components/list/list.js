import React from 'react';
import styles from './index.module.css'

export function List({label, array}){
    return (<div className={styles.listBox}>
        <h2>{label}</h2>
        <ul>
            {array.map((element, index) => (
                <li key={index+1}><span>{index}</span>{element}</li>
            ))}     
        </ul>
    </div>)
}