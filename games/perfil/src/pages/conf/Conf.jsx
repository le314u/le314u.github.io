import React, { useRef, useState,useEffect, Children, Component} from 'react';
import CheckList from '../../componentes/checkList/index.jsx'
import InputFiltered from '../../componentes/input/input.jsx'
import {PlusIcon,DashIcon } from '@primer/octicons-react';
import { Link } from 'react-router-dom';
import Draggable from "react-draggable";

import { Progress, ButtonGroup, Button ,LabelGroup, LabelDetail, Icon, Label, Select } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

const FILES = ["arte.json", "biologia.json", "fisiologia.json", "geografia.json", "harry_potter.json", "historia.json", "literatura.json", "minas_gerais.json", "mitologia.json", "musica.json", "ti.json"]

const THEMAS = [
  { key: 'arte', value: 'arte', text: 'Arte' },
  { key: 'biologia', value: 'biologia', text: 'Biologia' },
  { key: 'fisiologia', value: 'fisiologia', text: 'Fisiologia' },
  { key: 'geografia', value: 'geografia', text: 'Geografia' },
  { key: 'harry_potter', value: 'harry_potter', text: 'Harry Potter' },
  { key: 'historia', value: 'historia', text: 'Historia' },
  { key: 'literatura', value: 'literatura', text: 'Literatura' },
  { key: 'minas_gerais', value: 'minas_gerais', text: 'Minas Gerais' },
  { key: 'mitologia', value: 'mitologia', text: 'Mitologia' },
  { key: 'musica', value: 'musica', text: 'Musica' },
  { key: 'ti', value: 'ti', text: 'Ti' },
  { key: 'default', value: 'default', text: 'Default' }
]


function getKeyByText(text) {
  const theme = THEMAS.find(theme => theme.text.toLowerCase() === text.toLowerCase());
  return theme ? theme.key+'.json' : null; // Retorna a key ou null se não encontrar
}

function Conf() {
  const THEMA = "thema"
  const [nameFields, setNameFields] = useState([]);
  const [stepConf, setStepConf] = useState(0);
  const [themas, setThemas] = useState([]);
  const [count, setCount] = useState(1);
  const names=useRef()
  const ul=useRef()
  const state = { percent: ()=>(stepConf+1)/3 *100 }

  const alterarValor = (key, value) => {
    setNameFields(prevState => {
      return prevState.map(item => {
        if (item.key === key) {
          return { ...item, 'data': value };
        }
        return item;
      });
    });
  }

  function addThema(){
    let value = ul.current.querySelectorAll('[aria-checked="true"]')[0].innerText;
    if(themas.indexOf(value) == -1){
      let array = [...themas]
      array.push(value)
      setThemas(array)
    }
    console.log(themas)
  }

  function remove(element){
    let array = themas.filter(item => item !== element);
    setThemas(array)
  }

  function newName(){
      const newElement = {
        'key':'name_'+(count+1),
        'data':''
      }
      setCount(count+1)
      setNameFields([...nameFields,newElement])
  }

  function delName(key){
    return ()=>{
      const otherNames = nameFields.filter(item=>item.key !== key)
      setNameFields(otherNames)
    }
  }

  function chooseThema(){
    let array = themas.map( (e)=>getKeyByText(e))
    let stringfy = ''

    array.forEach((str, index, array) => {
      stringfy=stringfy+','+str
    })

    if(array.length == 0 ){
      sessionStorage.setItem(THEMA, "default.json");
    }else{
      sessionStorage.setItem(THEMA, stringfy.slice(1));
    }   
  }

  function createInput(index,value){
    return(
      <div key={index} className="row align-items-center">
        <div className="col">
          <InputFiltered onChange={handleChange} id={index} label="Name" placeholder={value} maxLength="16" arrayFilter="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"   />
        </div>
        <div className="col-auto">
          <button onClick={newName} type="button" className="btn mb-3"> <PlusIcon size={16}/></button>
          <button onClick={delName(index)} type="button" className="btn mb-3"> <DashIcon size={16}/></button>
        </div>
      </div>)
  }

  const handleChange = (event) => {
    const e = event.nativeEvent.target
    alterarValor(e.id, e.value)
  };


  function createTag(name){
    return <Label as='a'> {name} <Icon name='close' onClick={()=>{remove(name)}} /> </Label>
  }
  return (

      <div className="container d-flex align-items-center justify-content-center vh-100" role="document">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Configurando</h1>
              <Link to="/">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
              </Link>
            </div>
            <div className="p-5 pt-0">
              




            {stepConf === 0 && 
              <div id="names" ref={names}>
              {/*Primeiro Nome*/}
              <div className="row align-items-center">
                <div className="col">
                  <InputFiltered onChange={handleChange} className="col" id={`name_0`} label="Name" maxLength="16" arrayFilter="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"/>
                </div>
                <div className="col-auto">
                    <button  onClick={newName} type="button" className="btn mb-3"> <PlusIcon size={16}/></button>
                </div>
              </div>
          
              {/*Nomes adicionados dinamicamente*/}
              {
                nameFields.map((e, _) => {
                  return <div key={e.key}>{createInput(e.key,e.data)}</div>
                })
              }
              </div>
            }
            {stepConf === 1 && 
              <InputFiltered id="maxPoints" onChange={handleChange} placeholder="100" label="maxPoints" arrayFilter="0123456789" maxLength="4"/>
            }
            {stepConf === 2 && 
            
              <div ref={ul}>
                <Select  onMouseDown={addThema} laceholder='Escolha os Temas' options={THEMAS} />
                <div className=' p-1 pb-1'/>
                <LabelGroup color='blue'>
                  { themas.map((name)=>createTag(name))}                    
                </LabelGroup>
              </div> 
            }
                    </div>

            {stepConf === 2 &&
              <div onClick={chooseThema} className="p-2 form-floating mb-3 p-5 pt-0">
                <Link to="/play">
                  <button id="start" type="button" className="btn btn-primary form-control rounded-3 p-3" data-bs-dismiss="modal" aria-label="Start">Play</button>
                </Link>
              </div>
            }


            {stepConf !== 2 &&
              <div onClick={()=>setStepConf(stepConf+1)} className="p-2 form-floating mb-3 p-5 pt-0">
                  <button id="start" type="button" className="btn btn-primary form-control rounded-3 p-3" data-bs-dismiss="modal" aria-label="Start">Next</button>
              </div>
            }
            <div className='p-5 pt-0'>
              <Progress percent={state.percent()} color='blue'  />
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Conf;


































