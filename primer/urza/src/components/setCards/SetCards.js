import React from 'react';
import { useState } from 'react';
import "./SetCards.css"
import BlockCard from "../explanish/blockCard/BlockCard.js"


let offset=0
function SetCards({id, array_src, children, roll }){
    let fix=()=>{
        let scope = document.getElementById(id)
        const setCard = scope.getElementsByClassName("setCard")[0]
        const max = setCard.offsetWidth
        const sizeDiv = scope.clientWidth
        const move = sizeDiv/2
        let limit = (max/2)
        const transform = (offset)=>{ setCard.style.transform = `translateX(`+offset+`px)` }
        return {transform, move, limit}
    }

    let back=()=>{
        let {transform, move, limit} = fix()
        offset=offset+move
        offset = offset > limit ? -limit : offset;
        transform(offset)

    }

    let next=()=>{
        let {transform, move, limit} = fix()
        offset=offset-move
        offset = offset < -limit ? limit : offset;
        transform(offset)

    }
        
    return (
        <div id={id} className="cardsCarousel">
            <p className='titleSetCards'>{children}</p>
            <div className='setCard'>
                {array_src.map((element, index) => (
                    <BlockCard key={index} src={element}/>
                ))} 
            </div>
            {roll??<div className="manipulation">
                <button onClick={back} className="prev-button">Anterior</button>
                <button onClick={next} className="next-button">Próximo</button>
            </div>}

        </div>
    )
}
export default SetCards