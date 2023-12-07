import React, { useRef, useState,useEffect } from 'react';
import './button.css'


function Button(props){
    const buttonStyle = {
        '--button-color': props.buttonColor || '35deg', // Valor padrão ou o valor fornecido
    };
    
    return (
        <div onClick={props.onClick} style={buttonStyle}>
            <button className="button-pushable" role="button">
            <span className="button-shadow"></span>
            <span className="button-edge"></span>
            <span className="button-front text">
                {props.children}
            </span>
            </button>
        </div>
    )
}

export default Button;