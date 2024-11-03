import React, { useRef, useState,useEffect } from 'react';
import Card from '../../componentes/card/card.jsx'
import Button from '../../componentes/button/button.jsx'
import InputFiltered from '../../componentes/input/input.jsx'
import PopupComponent from '../ranking/ranking .jsx'
import {ListOrderedIcon,CheckIcon,XIcon } from '@primer/octicons-react';
import GAME from './hook.jsx'
import rand from '../../modules/Util.js'

// URL da API que você deseja chamar
const base_url = 'https://raw.githubusercontent.com/le314u/le314u.github.io/refs/heads/prod/games/perfil/assets/questions/'
const THEMA = "thema"


function Play() {
  const [card, setCard] = useState(null);
  const [order, setOrder] = useState([1,2,3,4,5]);
  const [qtd, setQtd] = useState(1);
  const [game, setGame] = useState( null );
  const [working, setWorking] = useState( true );
  const cardRef = useRef();


  useEffect(()=>{   
    const themas = sessionStorage.getItem(THEMA);
    const apiUrls = themas.split(',');
    

    Promise.all(apiUrls.map(url => 
      fetch(base_url + url).then(response => response.json())
    ))
    .then(responses => { // Supondo que você queira concatenar as respostas em um único objeto
      let concatenatedResponse = responses.flat()
    
      let game_hook = GAME(concatenatedResponse, setCard, setQtd);
      setGame(game_hook);
    })
    .catch(error => {
      console.error('Erro ao buscar as APIs:', error);
    });    
  },[])


  //
  useEffect(()=>{
    function getRandomInt(i, j) {
      return (Math.floor(Math.random() * (j - i + 1)) + i) % j;
    }
  
    function shufle(vet){
      let array = [...vet]
      let size = array.length
      for (let i = 0; i < size; i++) {
        const j = getRandomInt(0, size)
        let aux  = array[i]
        array[i] = array[j]
        array[j] = aux
      }
      return array
    }
    setOrder(shufle([...order]))
  },[card])

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
          {game?.isWorking() == true && card ?(
            <Card ref={cardRef}
              color={colorPlayer}
              namePlayer={namePlayer}
              theme={card.getResposta()} 
              tip_1={qtd >= 1 && card.getPergunta(order[0])}
              tip_2={qtd >= 2 && card.getPergunta(order[1])}
              tip_3={qtd >= 3 && card.getPergunta(order[2])}
              tip_4={qtd >= 4 && card.getPergunta(order[3])}
              tip_5={qtd >= 5 && card.getPergunta(order[4])}
            />):(
            <h1>Fim </h1>
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
