import React from "react";
import { Card } from "../card/card";
import styles from './index.module.css'

function DescriptionText({title,trick}){
    return(
    <>
        <h2>{title}</h2>
        <p> {trick}</p>
    </>
    )
}

function DescriptionContainer({children,nameCard,urlImg,scryfallCard}){
    return (
    <div className={styles.descriptionContainer}>
        <div className={styles.header}>
            <div className={styles.card}>
                <Card urlImg={urlImg} nameCard={nameCard}/>
            </div>
        </div>
        <div className={styles.description}>
            <div className={styles.text}> {children} </div>
            <div className={styles.info}> <a href={scryfallCard} target="_blank"> Continue Reading...</a></div>
        </div>
    </div>
    )
}

export default {
    Container:DescriptionContainer,
    Text:DescriptionText,
}

