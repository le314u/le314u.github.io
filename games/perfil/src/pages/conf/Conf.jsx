import React, { useRef, useState,useEffect, Children, Component} from 'react';
import CheckList from '../../componentes/checkList/index.jsx'
import InputFiltered from '../../componentes/input/input.jsx'
import {PlusIcon,DashIcon } from '@primer/octicons-react';
import { Link } from 'react-router-dom';
import Draggable from "react-draggable";
import { Progress, ButtonGroup, Button ,LabelGroup, LabelDetail, Icon, Label, Select } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const orderedStatus = ['NAME', 'POINT', 'THEMA'];

const Status = Object.freeze({
  NAME: 0,
  POINT: 1,
  THEMA: 2,
});

function getKeyByText(text) {
  const theme = THEMAS.find(theme => theme.text.toLowerCase() === text.toLowerCase());
  return theme ? theme.key+'.json' : null; // Retorna a key ou null se não encontrar
}

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
  { key: 'ti', value: 'ti', text: 'Ti' }
]

function Conf() {
  const THEMA = "thema"
  const [nameFields, setNameFields] = useState([]);
  const [stepConf, setStepConf] = useState(0);
  const [themas, setThemas] = useState([]);
  const [count, setCount] = useState(0);
  const names=useRef()
  const observedRef = useRef(null);
  const state = { percent: ()=>(stepConf+1)/3 *100 }

  useEffect(() => {    
    if(stepConf==Status.NAME){
      if(sessionStorage.getItem('name_0')==''){
        sessionStorage.setItem('name_0','GUEST')
      }
    }
    if(stepConf==Status.POINT){
      sessionStorage.setItem('maxPoints',100)
    }
    if(stepConf==Status.THEMA){
      // Define o callback que será executado quando ocorrer uma mutação
      const mutationCallback = (mutationsList) => {
        for (let mutation of mutationsList) {
          if (mutation.type === 'attributes') {//Teve mudança de Atributo
            if(mutation.attributeName === 'data-suir-click-target'){// teve mudança do atrib
              let value = mutation.target.childNodes[0].innerText
              addThema(value)              
            }
            
            
          }
        }
      };
      
      // Cria o MutationObserver e configura as opções de observação
      const observer = new MutationObserver(mutationCallback);
      const config = { attributes: true, childList: true, subtree: true };
      
      // Observa o elemento referenciado
      if (observedRef.current) {
        observer.observe(observedRef.current, config);
      }
      
      // Limpeza: desconecta o observer ao desmontar o componente
      return () => {
        observer.disconnect();
      };


    }
   }, [state]);
   
  function addThema(value=null){
    //Gambiarra
    if(themas.indexOf(value) == -1){
      let array = [...themas]
      array.push(value)
      setThemas(array)
    }
  }
   
  function newName(){
    const newElement = {
      'key':'name_'+(count+1),
      'data':''
    }
    setCount(count+1)
    setNameFields([...nameFields,newElement])
  }
  
  function handleSelect(){
    //Gambiarra Pq nem sempre quando clica estava adicionando
    // let value = observedRef.current.querySelectorAll('[aria-checked="true"]')[0].innerText;
    // addThema(value)

    // setTimeout(() => {
    //   let value = observedRef.current.querySelector("#root > div > div > div > div:nth-child(2) > div > div.ui.selection.dropdown > div.divider.text").innerText
    //   addThema(value)
    // }, 100); // 2000 milissegundos = 2 segundos
  }
  
  function handleThema(){
    if(themas.length > 0 ){ 
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
  }

  const handleLink = (cond)=>{

    return (e) => {
      if (!cond) {
          e.preventDefault(); // Impede a navegação
      }
    }
}
  
  function handleChange (event) {
    
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
    const e = event.nativeEvent.target
    alterarValor(e.id, e.value)
  };
  
  function InputName(index,value, enable=true){

    const newName = (key=index)=>{
      const newElement = {
        'key': 'name_'+(count+1),
        'data':''
      }
      return ()=>{
        setNameFields([...nameFields,newElement])
        setCount(count+1)
      }
      
    }

    const delName = (key=index) => {
      return ()=>{
        const otherNames = nameFields.filter(item=>item.key !== key)
        setNameFields(otherNames)
        sessionStorage.removeItem(key)
      }
    }

    const newFilter = (e)=>{
      if(e.key==='Enter'){ newName(index)() }
    }

    const isDisable=()=>{
      return nameFields.some((obj,key) => {
        if(obj.key == index && key!=nameFields.length-1){
          return true
        }
        return false; // Continua iterando
      });

    }

    if(isDisable() && value ==''){
      delName(index)()
    }

    return(
      <div key={index} className="row align-items-center">
      <div className="col">
        <InputFiltered disabled={isDisable()} onType={newFilter} onChange={handleChange} id={index} label="Name" placeholder={value} maxLength="16" arrayFilter="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"   />
      </div>
      <div className="col-auto">
        <button onClick={newName(index)} type="button" className="btn mb-3"> <PlusIcon size={16}/></button>
        <button onClick={delName(index)} type="button" className="btn mb-3"> <DashIcon size={16}/></button>
      </div>
    </div>)

  };

  function Tag(name){

    const removeThema = (element) => {
      let array = themas.filter(item => item !== element);
      setThemas(array)
    }

    return <Label as='a'> {name} <Icon name='close' onClick={()=>{removeThema(name)}} /> </Label>
  };

  function isEnable(key){
    let keys = Object.keys(sessionStorage)

    return keys.indexOf(key) != -1
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
              {/*Nomes*/}
              {stepConf === Status.NAME && 
                <div id="names" ref={names}>
                  {/*Primeiro Nome*/}
                  <div className="row align-items-center">
                    <div className="col">
                        <InputFiltered disabled={ count>0 && nameFields.length>0 } onType={(e)=>{ if(e.key==='Enter'){ newName() }}} onChange={handleChange} className="col" id={`name_0`} label="Name" maxLength="16" arrayFilter="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"/>                   
                    </div>
                    <div className="col-auto">
                        <button  onClick={newName} type="button" className="btn mb-3"> <PlusIcon size={16}/></button>
                    </div>
                  </div>
                  {/*Nomes adicionados dinamicamente*/}
                  {nameFields.map((e, _) => {
                    return <div key={e.key}>{InputName(e.key,e.data)}</div>
                  })}
                </div>
              }
              {stepConf === Status.POINT && 
                <InputFiltered id="maxPoints"  placeholder="100" label="maxPoints" arrayFilter="0123456789" maxLength="4"/>
              }
              {stepConf === Status.THEMA && 
                <div ref={observedRef}>
                  <Select onChange={handleSelect} placeholder='Escolha os Temas' options={THEMAS} />
                  <div className=' p-1 pb-1'/>
                  <LabelGroup color='blue'>
                    { themas.map((name)=>Tag(name)) }                   
                  </LabelGroup>
                </div> 
              }
            </div>

            {stepConf === Status.THEMA ? (
              <div onClick={handleThema} className="p-2 form-floating mb-3 p-5 pt-0">
                <Link onClick={handleLink(themas.length > 0)} to="/play">
                  <button id="start" type="button" className={`btn btn-primary form-control rounded-3 p-3 ${themas.length > 0 ? '' : 'disabled'}`} data-bs-dismiss="modal" aria-label="Start">Play</button>
                </Link>
              </div>
            ):(
              <div onClick={()=>setStepConf(stepConf+1)} className="p-2 form-floating mb-3 p-5 pt-0">
                  <button id="start" type="button" className="btn btn-primary form-control rounded-3 p-3" data-bs-dismiss="modal" aria-label="Start">Next</button>
              </div>
            )}

            <div className='p-5 pt-0'>
              <Progress percent={state.percent()} color='blue'  />
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Conf;