import React from 'react';
import './List.css'
function List({label, array}){
    return (
        <div className="listBox">
            <h2>{label}</h2>
            <ul>
            {array.map((element, index) => (
                <li key={index+1}><span>{index}</span>{element}</li>
            ))}     
            </ul>
        </div>
    )
}


export {List}