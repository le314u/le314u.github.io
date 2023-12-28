import Modal from 'react-modal';
import React, { useRef, useState,useEffect } from 'react';
import {ListOrderedIcon,CheckIcon,XIcon } from '@primer/octicons-react';

function  playersOrdenados(players){
  let ordenedPlayers = [...players]
  ordenedPlayers.sort((a, b) => b.getPontos() - a.getPontos());
  return ordenedPlayers
}

const PopupComponent = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [players,setPlayers] = useState(props.players);
  

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalStyles = {
    content: {
      maxWidth: "800px",  // Defina o tamanho máximo desejado
      margin: "auto",     // Centralize o modal horizontalmente
    },
  };


  let list = []
  playersOrdenados(players).forEach((player, index, array) => {
    let name = player.getNome()
    let point = player.getPontos()
    list.push( <li  key={name} className="list-group-item" data-bs-toggle="list" role="button">{point} - {name}</li> )
  })
  
  let content = (
      <div>         
        <div className="offcanvas-body">
          <ul id="ranking" className="list-group">
          {list.map((element, index) => (
            element
          ))}
          </ul>
        </div>
      </div>
    )


  const button = (
    <div role="button" onClick={openModal} >
      <ListOrderedIcon size={32} ></ListOrderedIcon>
    </div>
  )

  return (
    <>
      {button}
      <Modal style={modalStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"></div>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Ranking</h5>
          <button onClick={closeModal}  type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        {content}
      </Modal>
    </>
  )
}

export default  PopupComponent;

