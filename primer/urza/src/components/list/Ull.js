import React from 'react';
import './Ull.css'
function Ull({array}){
    return (
            <ul className="Ull">
            {array.map((element, index) => (
                <li key={index+1}><span></span>{element}</li>
            ))}     
            </ul>
    )
}


export {Ull}