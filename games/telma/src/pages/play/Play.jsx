import React, { useRef, useState,useEffect } from 'react';
import Button from '../../componentes/button/button.jsx'
// import Card from '../../componentes/card/card.jsx';
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


const container = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
}

const titulo = {
  display: 'flex',
  alignItems: 'center',
}

const h1 = {
  fontSize: '36px',
  margin: 0,
}

const span = {
  margin: '0 20px',
  fontSize: '24px',
  color: '#555',
}



function Play() {
  const [card, setCard] = useState(null);
  const [qtd, setQtd] = useState(1);
  const [game, setGame] = useState( GAME(setCard,setQtd) );

  const cardRef = useRef();


 


  let players = game.tabuleiro.players
  console.log(players)
  let namePlayer = game.player().getNome()
  let colorPlayer = game.player().getCor()
  let size = 140
  let fontSize = size*0.6



  function get2Names(){
    function sortearNumeros(min, max) {
      var numero1 = Math.floor(Math.random() * (max - min + 1)) + min;
      var numero2;
  
      do {
          numero2 = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (numero2 === numero1);
  
      return [numero1, numero2];
    }
  
      
    // Exemplo: sorteando dois números entre 1 e 100
    let resultado = sortearNumeros(0, players.length-1);
    console.log(resultado)
    let name1 = players[resultado[0]].getNome()
    let name2 =players[resultado[1]].getNome()

    typing("name_1",name1,0,500)
    typing("name_2",name2,0,500)

    function typing(id,txt, i = 0, speed = 50) {
        i = txt.length
        function caractereAleatorio() {
            var codigoCaractere = Math.floor(Math.random() * 26) + 97;
            return String.fromCharCode(codigoCaractere);
        }

        function replace(str, indice, novoCaractere) {
            if (indice < 0 || indice >= str.length) {
                console.error("Índice fora dos limites da string.");
                return str;
            }

            var caracteres = str.split('');
            caracteres[indice] = novoCaractere;
            return caracteres.join('');
        }

        function add() {
            let complete = txt.length - tag.innerHTML.length;

            if (complete !== 0) {
                tag.innerHTML += caractereAleatorio();
                setTimeout(add, speed, i + 1);
            } else {
                typeWriter(i);
            }
        }

        function rm() {
            let complete = txt.length - tag.innerHTML.length;

            if (complete !== 0) {
                let i = tag.innerHTML.length - 1;
                tag.innerHTML = tag.innerHTML.substring(0, i);
                setTimeout(rm, speed, i);
            } else {
                typeWriter(i);
            }
        }

        let tag = document.getElementById(id);
        let complete = txt.length - tag.innerHTML.length;

        if (complete !== 0) {
            complete > 0 ? add() : rm();
        }else{
          typeWriter(i)
        }

      function typeWriter(i) {

        if (i >= 0) {
            let newText = replace(tag.innerHTML, i, txt.charAt(i));
            tag.innerHTML = newText;
            setTimeout(typeWriter, speed, i - 1);
        }
    }
  }
  }


  //typing("name_1","judas",0,500)


  return (
    
      <div className="vh-100" role="document">
        <div className="modal-header p-5 pb-4 border-bottom-0"><div></div><PopupComponent players={players} ></PopupComponent></div>
        <div  className="container d-flex align-items-center justify-content-center" style={vh_75} >

          <div style={{display:"block"}}>
              <div style={ container }className="container">
                <div style={titulo} className="titulo">
                    <h1 style={h1} id="name_1">Nome</h1>
                    <span style={span}>vs</span>
                    <h1 style={h1} id="name_2">Nome</h1>
                </div>
              </div>
          </div>
        </div>

        <div id="play_start" className="d-flex flex-column align-items-center">
          <Button onClick={get2Names} minWidth="300px" id="start" className="p-3 my-3" buttonColor="345deg">Start</Button>
          <div id='play_controller' className='container d-flex align-items-center justify-content-evenly' style={estiloCustomizado}>
            {/* <Button buttonColor="225deg" onClick={() => { cardRef.current.wrong(); game.errou() }}><XIcon size={24} />Errou</Button>
            <Button buttonColor="75deg" onClick={() => { cardRef.current.correct(); game.acertou() }}><CheckIcon size={24} />Acertou</Button> */}
          </div>
        </div>
      </div>
  );
}

export default Play;
