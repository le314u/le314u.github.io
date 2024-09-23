import React from 'react';
import "./Block.css"


function Block({children,emphasis,id }){
    return (
        <div id={id} className={"block " + ((emphasis ? "emphasis":''))}>
            <div className='content'>{children }</div>          
        </div>
    )
}



export default Block