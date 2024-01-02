import React, { useRef, useState,useEffect } from 'react';
import CheckList from '../../componentes/checkList/index.jsx'
import InputFiltered from '../../componentes/input/input.jsx'
import {PlusIcon,DashIcon } from '@primer/octicons-react';
import { Link } from 'react-router-dom';
import Draggable from "react-draggable";


function Conf() {
  const THEMA = "thema"
  const [nameFields, setNameFields] = useState([]);
  const [count, setCount] = useState(1);
  const names=useRef()
  const ul=useRef()


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
    let tags = ul.current.querySelectorAll('.active');
    let thema = []
    tags.forEach((tag, index, array) => {
      thema.push( tag.getAttribute('url'))
    })
    if(thema.length == 0 ){
      sessionStorage.setItem(THEMA, "/perfil/default.json");
    }else{
      sessionStorage.setItem(THEMA, thema);
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


  return (

      <div  className="container d-flex align-items-center justify-content-center vh-100" role="document">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="modal-content rounded-4 shadow">


            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Configurando</h1>
              <Link to="/">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
              </Link>
            </div>

      
            <div className="p-5 pt-0">
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
                    
              <InputFiltered id="maxPoints" onChange={handleChange} placeholder="100" label="maxPoints" arrayFilter="0123456789" maxLength="4"/>
              <div ref={ul}>
                <CheckList.ul>
                  <CheckList.li data="HP" url="/perfil/harry_potter.json"> Harry Potter </CheckList.li> 
                  {/* 
                    <CheckList.li data="HP" url="/perfil/harry_potter.json"> Tema : 1 </CheckList.li> 
                    <CheckList.li data="HP" url="/perfil/harry_potter.json"> Tema : 2 </CheckList.li>
                  */}
                </CheckList.ul>
              </div>

            </div>

            <div onClick={chooseThema} className="p-2 form-floating mb-3">
              <Link to="/play">
                <button id="start" type="button" className="btn btn-primary form-control rounded-3 p-3" data-bs-dismiss="modal" aria-label="Start">Play</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    
  );
}




export default Conf;







