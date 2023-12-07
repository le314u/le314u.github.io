import React, { useRef, useState,useEffect } from 'react';
import Card from '../../componentes/card/card.jsx'
import Button from '../../componentes/button/button.jsx'
import InputFiltered from '../../componentes/input/input.jsx'
import PopupComponent from '../ranking/ranking .jsx'
import {ListOrderedIcon,CheckIcon,XIcon } from '@primer/octicons-react';
import GAME from './hook.jsx'


const vh_75={
  height:" 75vh",
}


const estiloCustomizado = {
  maxWidth: '600px', // Defina o valor desejado para a largura máxima
  padding: '10px'
};


function Play() {
  const [card, setCard] = useState(null);
  const [qtd, setQtd] = useState(1);
  const [game, setGame] = useState( GAME(setCard,setQtd) );

  const cardRef = useRef();


  useEffect(()=>{
    setCard(game.getCard())
  },[])

  let namePlayer = game.player().getName()
  let colorPlayer = game.player().getColor()


  return (
    
      <div className="vh-100" role="document">
        <div className="modal-header p-5 pb-4 border-bottom-0"><div></div><PopupComponent></PopupComponent></div>
        <div  className="container d-flex align-items-center justify-content-center" style={vh_75} >
          {card ?(
          <Card ref={cardRef}
          color={colorPlayer}
          namePlayer={namePlayer}
          theme={card.getResposta()} 
          tip_1={qtd >= 1 && card.getPergunta(1)}
          tip_2={qtd >= 2 && card.getPergunta(2)}
          tip_3={qtd >= 3 && card.getPergunta(3)}
          tip_4={qtd >= 4 && card.getPergunta(4)}
          tip_5={qtd >= 5 && card.getPergunta(5)}
        />):(
          <h1>Fim</h1>
        )}
        </div>
        <div id='play_controller vh-75' className='container d-flex align-items-center justify-content-evenly' style={estiloCustomizado}>
          <Button buttonColor="345deg"  onClick={ ()=>{cardRef.current.wrong();game.errou()}} ><XIcon size={24}/>Errou </Button>
          <Button buttonColor="145deg"  onClick={ ()=>{cardRef.current.correct();game.acertou()}}  ><CheckIcon size={24}/>Acertou</Button> 
        </div>
      </div>
  );
}

export default Play;
