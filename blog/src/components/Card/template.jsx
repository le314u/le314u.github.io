import React, { useRef, useState } from 'react';
import * as styles from './style.module.css';  // Importação correta para CSS Modules


export function ListCard({children}){
  return (
      <ul className={styles.cardList}>
        {children}
      </ul>
    )
}


export function Card({title,text,urlImg}){
  const cardDescription = useRef()
  const cardText = useRef()
  const [scrollPos,setScrollPos]=useState(0)


  const myImg={
      backgroundImage:`url(${urlImg})`,
  }

  
  // Função para rolar suavemente para a posição salva quando o mouse sai
  const handleMouseLeave = () => {
    cardDescription.current.scrollTo({
      top: 0, // Vai para a posição salva
      left: 0,
      behavior: "smooth", // Anima a rolagem
    });
    cardText.current.scrollTo({
      top: 0, // Vai para a posição salva
      left: 0,
      behavior: "smooth", // Anima a rolagem
    });
  };

  return (
      <li 
        className={styles.card} 
        onMouseLeave={handleMouseLeave} // Define o comportamento quando o mouse sai
     >
        <div className={styles.cardImage}   style={myImg} />
        <a className={styles.cardDescription} ref={cardDescription} target="_blank">
          <h2>{title}</h2>
          <pre ref={cardText}>{text}</pre>
        </a>
      </li>
  )
}
