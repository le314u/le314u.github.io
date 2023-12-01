import React, { useRef, useState,useEffect } from 'react';
import Card from '../../componentes/card.jsx'
import InputFiltered from '../../componentes/input/input.jsx'
import {PlusIcon,DashIcon,CheckIcon,XIcon } from '@primer/octicons-react';
import GAME from './hook.jsx'



const vh_80={
  height:" 80vh"
}

const R = {
  backgroundColor: '#F00', // Substitua '#aabbcc' pelo seu código de cor HEX desejado
};

const G = {
  backgroundColor: '#0F0', // Substitua '#aabbcc' pelo seu código de cor HEX desejado
};

const estiloCustomizado = {
  maxWidth: '600px', // Defina o valor desejado para a largura máxima
  padding: '10px'
};




function Play() {
  const [card, setCard] = useState(null);
  const [qtd, setQtd] = useState(1);
  const game = GAME(setCard,setQtd)

  useEffect(()=>{
    setCard(game.getCard())
  },[])



  return (
    
      <div className="vh-100" role="document">
        <div  className="container d-flex align-items-center justify-content-center" style={vh_80} >
          {card && 
          <Card color="#777"
          theme={card.getResposta()} 
          tip_1={qtd >= 1 && card.getPergunta(1)}
          tip_2={qtd >= 2 && card.getPergunta(2)}
          tip_3={qtd >= 3 && card.getPergunta(3)}
          tip_4={qtd >= 4 && card.getPergunta(4)}
          tip_5={qtd >= 5 && card.getPergunta(5)}
        />}
        </div>
        
        
        <div id='play_controller vh-75' className='container d-flex align-items-center justify-content-evenly' style={estiloCustomizado}>
          <div onClick={game.errou} role='button' className="d-flex p-4 rounded-3" style={R}><XIcon size={24}/>Errou </div>
          <div onClick={game.acertou} role='button' className="d-flex p-4 rounded-3" style={G}><CheckIcon size={24}/>Acertou</div> 
        </div>
      </div>
  );
}




export default Play;







