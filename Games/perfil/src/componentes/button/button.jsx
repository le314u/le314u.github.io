import React, { useRef, useState,useEffect } from 'react';
import './button.css'


function Button(props){
    const buttonStyle = {
        '--button-color': props.buttonColor || '35deg', // Valor padrão ou o valor fornecido
    };
    
    return (
        <div onClick={props.onClick} style={buttonStyle}>
            <button class="button-pushable" role="button">
            <span class="button-shadow"></span>
            <span class="button-edge"></span>
            <span class="button-front text">
                {props.children}
            </span>
            </button>
        </div>
    )
}

export default Button;