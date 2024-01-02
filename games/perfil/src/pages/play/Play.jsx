import React, { useRef, useState,useEffect } from 'react';
import Card from '../../componentes/card/card.jsx'
import Button from '../../componentes/button/button.jsx'
import InputFiltered from '../../componentes/input/input.jsx'
import PopupComponent from '../ranking/ranking .jsx'
import {ListOrderedIcon,CheckIcon,XIcon } from '@primer/octicons-react';
import GAME from './hook.jsx'

// URL da API que você deseja chamar
const base_url = 'https://raw.githubusercontent.com/le314u/LoremIpsum-PTBR/main'

function Play() {
  const [card, setCard] = useState(null);
  const [qtd, setQtd] = useState(1);
  const [game, setGame] = useState( null );
  const cardRef = useRef();


  useEffect(()=>{   
    const apiUrl = sessionStorage.getItem("thema");
    fetch(base_url+apiUrl)
      .then((response)=>{
        return response.json();
      })
      .then((json)=>{
        let game_hook = GAME(json,setCard,setQtd)
        setGame( game_hook )
      });
    
  },[])

  useEffect(()=>{
    if (game) {
      setCard(game.getCard());
    }
  },[game])


  let players = game?.tabuleiro?.players ?? null
  let namePlayer = game?.player()?.getNome() ?? "Guest"
  let colorPlayer = game?.player()?.getCor() ?? "#AAA"

  return (
      <div className="vh-100" role="document">
        {players !== null && players !== undefined ? (<div className="modal-header p-5 pb-4 border-bottom-0"><div></div><PopupComponent players={players} ></PopupComponent></div>):''}
        <div  className="container d-flex align-items-center justify-content-center" style={{ height:" 75vh", }} >
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
        <div id='play_controller vh-75' className='container d-flex align-items-center justify-content-evenly' style={{ maxWidth: '600px', padding: '10px' }}>
          <Button buttonColor="345deg"  onClick={ ()=>{cardRef.current.wrong();game.errou()}} ><XIcon size={24}/>Errou </Button>
          <Button buttonColor="145deg"  onClick={ ()=>{cardRef.current.correct();game.acertou()}}  ><CheckIcon size={24}/>Acertou</Button> 
        </div>
      </div>
  );
}

export default Play;
