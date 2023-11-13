import React, { useRef, useState,useEffect } from 'react';
import CheckList from '../../componentes/checkList/index.js'
import InputFiltered from '../../componentes/input/input.js'
import {PlusIcon,DashIcon } from '@primer/octicons-react';




function Conf() {
  const [nameFields, setNameFields] = useState([]);
  const [count, setCount] = useState(1);
  const names=useRef()


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
      const config = nameFields.filter(item=>item.key !== key)
      setNameFields(config)
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

  useEffect(() => {
  },nameFields)
 

  return (
      <div className="container-sm" role="document">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="modal-content rounded-4 shadow">


            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-2">Configurando</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
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
                    return <>{createInput(e.key,e.data)}</>
                  })
                }
              </div>
                    
              <InputFiltered id="maxPoints" placeholder="100" label="maxPoints" arrayFilter="0123456789" maxLength="4"/>
                
              <CheckList.ul>
                <CheckList.li> Tema : 1 </CheckList.li> 
                <CheckList.li> Tema : 2 </CheckList.li> 
                <CheckList.li> Tema : 3 </CheckList.li> 
              </CheckList.ul>

            </div>


            <div className="p-5 form-floating mb-3">
              <input id="start" type="button" className="btn btn-primary form-control rounded-3  " value="Start" / >
            </div>

          </div>
        </div>
      </div>
  );
}




export default Conf;







