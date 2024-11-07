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
	const players = game.tabuleiro.players
	const ID_NAME1 = "name_1"
	const ID_NAME2 = "name_2"
	const SPEED = 200
	const namePlayer = game.player().getNome()
	const colorPlayer = game.player().getCor()
	const size = 140
	const fontSize = size*0.6

	const [changing, setChanging] = useState(0);

	useEffect(()=>{
		if(changing == 3){
			setChanging(0)
		}
	},[changing])
	
	const sortearNumeros=(min, max)=>{
		var numero1 = Math.floor(Math.random() * (max - min + 1)) + min;
		var numero2;
	
		do {
			numero2 = Math.floor(Math.random() * (max - min + 1)) + min;
		} while (numero2 === numero1);
	
		return [numero1, numero2];
	}
	
	const caractereAleatorio=()=>{
		var codigoCaractere = Math.floor(Math.random() * 26) + 97;
		return String.fromCharCode(codigoCaractere);
	}
	
	const replace=(str, i, char)=>{
		//Dada a string "str" substituo o caracter de indice "i" pelo novo caracter "char"
		if (i < 0 || i >= str.length) {
			return str;
		}
	
		//Divisão de string em um array de caracteres
		var caracteres = str.split('');
		//Replace em si
		caracteres[i] = char;
		//União de um array de caracteres em uma unica string.
		return caracteres.join('');
	}

	const get_tag = (id)=>document.getElementById(id);
	const get_name=(id)=>{
		let tag = get_tag(id)
		return tag.innerText
	}
	const set_name=(id,newName)=>{
		let tag = get_tag(id)
		tag.innerText = newName
	}
	function get2Names(){
		// Exemplo: sorteando dois números
		let indices = sortearNumeros(0, players.length-1);
		// Pega os dois nomes Sorteados
		let name1 = players[indices[0]].getNome()
		let name2 = players[indices[1]].getNome()
		return [name1,name2]
	}
	function fog(originalName,func){
		let arrayName = originalName.split('')
		for (let i = 0; i < arrayName.length; i++) {
			arrayName[i] = caractereAleatorio()		
		}
		func(arrayName)
	}
	function add(oldName) {
		return oldName+caractereAleatorio()
	}
	function rm(oldName) {
		return oldName.substring(0, oldName.length-1)
	}
	function typing(id, newName, step = 0){
		let oldName = get_name(id)
		let offSet = newName.length - oldName.length
		if (offSet !== 0) {
			let auxName = offSet > 0 ? add(oldName) : rm(oldName);
			set_name(id,auxName)
			effectTyping(id,step,newName)
			setTimeout(() => typing(id, newName, step + 1), SPEED);
		}else{
			if(step < newName.length){
				effectTyping(id,step,newName)
				setTimeout(() => typing(id, newName, step + 1), SPEED);
			}else{
				setChanging((prevChanging) => (prevChanging + 1));
			}
		}
	}
	function effectTyping(id,step,newName) { 
		let oldName = get_name(id)
		if (step < newName.length) {
			let auxName = replace(oldName,step,newName.charAt(step))
			set_name(id, auxName)
		}
	}
	function play(){
		if(changing == 0){
			setChanging((prevChanging) => (prevChanging + 1));
			let [name1,name2] = get2Names()
			//Subistitui o primeiro nome e o segundo nome
			typing(ID_NAME1, name1)
			typing(ID_NAME2, name2)
		}
	}

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
          <Button onClick={play} minWidth="300px" id="start" className="p-3 my-3" buttonColor="345deg">Start</Button>
          <div id='play_controller' className='container d-flex align-items-center justify-content-evenly' style={estiloCustomizado}>
            {/* <Button buttonColor="225deg" onClick={() => { cardRef.current.wrong(); game.errou() }}><XIcon size={24} />Errou</Button>
            <Button buttonColor="75deg" onClick={() => { cardRef.current.correct(); game.acertou() }}><CheckIcon size={24} />Acertou</Button> */}
          </div>
        </div>
      </div>
  );
}

export default Play;
