import React, { useRef, useState,useEffect } from 'react';
import InputFiltered from '../../componentes/input/input.jsx'
import {PlusIcon} from '@primer/octicons-react';


function NewCards() {
  const Resposta = useRef()
  const Afirmacao_1 = useRef()
  const Afirmacao_2 = useRef()
  const Afirmacao_3 = useRef()
  const Afirmacao_4 = useRef()
  const Afirmacao_5 = useRef()
  
  function newData(){
    const data = {
      Resposta:Resposta.current.value,
      Afirmacao_1:Afirmacao_1.current.value,
      Afirmacao_2:Afirmacao_2.current.value,
      Afirmacao_3:Afirmacao_3.current.value,
      Afirmacao_4:Afirmacao_4.current.value,
      Afirmacao_5:Afirmacao_5.current.value
    }
    console.log(data)
  }

  return (
      <div  className="container d-flex align-items-center justify-content-center vh-100" role="document">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Dados Card</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
            </div>      
            <div className="p-5 pt-0">
              <div className="row align-items-center">
                <div className="row">
                  <InputFiltered onChange={(e)=>{}}  tag={Resposta} label="Resposta"/>
                  <InputFiltered onChange={(e)=>{}}  tag={Afirmacao_1} label="Afirmação_1"/>
                  <InputFiltered onChange={(e)=>{}}  tag={Afirmacao_2} label="Afirmação_2"/>
                  <InputFiltered onChange={(e)=>{}}  tag={Afirmacao_3} label="Afirmação_3"/>
                  <InputFiltered onChange={(e)=>{}}  tag={Afirmacao_4} label="Afirmação_4"/>
                  <InputFiltered onChange={(e)=>{}}  tag={Afirmacao_5} label="Afirmação_5"/>
                  <button onClick={newData} type="button" className="btn mb-3" style={{backgroundColor:"#0d6efd", color:"#fff" }}> <PlusIcon size={16}/></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default NewCards;