import React, { useState } from "react";
import { GridRow, GridColumn, Button, Divider, Grid, Header, Icon, Search, Segment, } from 'semantic-ui-react'
import { ManaText } from "../../filters/mana";
import symbol_bf from "../../assets/data/espadas.svg";
import symbol_hand from '../../assets/data/cartas.svg';
import symbol_expand from '../../assets/data/expand.svg';
import symbol_minimize from '../../assets/data/minimize.svg';
import { Tips } from "../tips";
import styles from "./index.module.css";



function manas(qtd){
    const element = []
    for (let index = 0; index < qtd; index++) {
        element.push("{u}")        
    }
    return element
}

export function StepCombo({cost,cast,target,trigger}){
    return (    
        <div className={styles.step}>
            {cost?(
                <p>Cost: <ManaText>{cost}</ManaText></p>
            ):(<div></div>)}
            {cast?(<p>Cast:{cast}</p>):<p/>}
            {target?(<p>Target:{target}</p>):<p/>}
            {trigger?(<p>Trigger:{trigger}</p>):<p/>}
        </div>
    )
}

export function Combo({children,qtdMana,batleField,hand,name}){
    const [isVisible,setVisibilite] = useState(false)
    
    function handleShow(){
        setVisibilite(!isVisible)
    }


    return (
    <div className={styles.combo}>
        
        <div onClick={handleShow} className={styles.header}>

       
            
        {/* <img   src={isVisible?symbol_minimize:symbol_expand} className={`${styles.icon} ${styles.info}`} /> */}
        <img   src={symbol_minimize} className={`${styles.icon} ${styles.info} ${isVisible?'':styles.hidden}`} />
        <img   src={symbol_expand} className={`${styles.icon} ${styles.info} ${isVisible?styles.hidden:''}`} />

            {qtdMana&&
            <div className={styles.mana}>
                <ManaText>{'{X}'}</ManaText> {qtdMana}
            </div>}
            

            {batleField&&<div className={styles.bf}>
                <ManaText>{'{Y}'}</ManaText>  no campo: {cards(batleField)}
            </div>}

            {hand&&<div  className={styles.hand}>
                <ManaText>{'{Z}'}</ManaText> na mão: {cards(hand)}   
            </div>}
            <div className={styles.name} >{name}</div>

        </div>
        
        <div className={`${styles.body} ${isVisible?styles.visibility:''} `}>
            {children}
        </div>

    </div>
    )
}

function cards(array){
    if( Array.isArray(array) ){
        return (<>
            {array.map((e,i)=>{
                return (<Tips key={i}>{e}   </Tips>)
            })}
        </>)
    }
}