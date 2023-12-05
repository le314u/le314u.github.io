import React, { useRef, useState,useEffect } from 'react';
import Card from '../../componentes/card/card.jsx'
import Button from '../../componentes/button/button.jsx'
import InputFiltered from '../../componentes/input/input.jsx'
import {PlusIcon,DashIcon,CheckIcon,XIcon } from '@primer/octicons-react';
import GAME from './hook.jsx'



const vh_80={
  height:" 80vh"
}


const estiloCustomizado = {
  maxWidth: '600px', // Defina o valor desejado para a largura máxima
  padding: '10px'
};


function Play() {
  const [card, setCard] = useState(null);
  const [qtd, setQtd] = useState(1);
  const correct = useRef(null);
  const wrong = useRef(null);
  const cardRef = useRef();

  const game = GAME(setCard,setQtd)

  useEffect(()=>{
    setCard(game.getCard())
  },[])

  let namePlayer = game.player().getName()
  let colorPlayer = game.player().getColor()
  
  
  return (
    
      <div className="vh-100" role="document">
        <div  className="container d-flex align-items-center justify-content-center" style={vh_80} >
          {card && 
          <Card buttons = {{wrong:wrong,correct:correct}}
                ref={cardRef}
                color={colorPlayer}
                namePlayer={namePlayer}
                theme={card.getResposta()} 
                tip_1={qtd >= 1 && card.getPergunta(1)}
                tip_2={qtd >= 2 && card.getPergunta(2)}
                tip_3={qtd >= 3 && card.getPergunta(3)}
                tip_4={qtd >= 4 && card.getPergunta(4)}
                tip_5={qtd >= 5 && card.getPergunta(5)}
          />}
        </div>
        
        
        <div id='play_controller vh-75' className='container d-flex align-items-center justify-content-evenly' style={estiloCustomizado}>
          <Button buttonColor="345deg" ref={wrong} onClick={ ()=>{cardRef.current.wrong();game.errou()}} ><XIcon size={24}/>Errou </Button>
          <Button buttonColor="145deg" ref={correct} onClick={ ()=>{cardRef.current.correct();game.acertou()}}  ><CheckIcon size={24}/>Acertou</Button> 
        </div>
      </div>
  );
}




export default Play;







