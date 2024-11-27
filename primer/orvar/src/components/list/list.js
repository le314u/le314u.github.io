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




export function ListDot({children}){
    const childrens = React.Children.toArray(children)
    return (
            <ul className={styles.listUl}>
            {childrens.map((element, index) => (
                <li key={index+1}><span></span>{element}</li>
            ))}     
            </ul>
    )
}
