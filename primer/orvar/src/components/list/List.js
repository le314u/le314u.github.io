import { useState } from 'react';
import styles from "./List.css"
import  Block from '../block/Block'

function List({label, array}){
    return (
        <div className="listBox">
            <h2>{label}</h2>
            <ul>
            {array.map((element, index) => (
                <li key={index}><span>{index}</span>{element}</li>
            ))}     
            </ul>
        </div>
    )
}


export {List}