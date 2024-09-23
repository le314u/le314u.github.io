import React from 'react';
import "./Title.css"


function Title({children,emphasis,id }){
    return (
        <div id={id} className={"title " + ((emphasis ? "emphasis":''))}>
            <div className='content'>{children }</div>          
        </div>
    )
}

export default Title