import React, { useRef, useState,useEffect } from 'react';
import Engine from './Engine';
import 'bootstrap/dist/css/bootstrap.min.css';




function Play() {
  const [code, setCode] = useState('----');
  const result = useRef();

  const setLocal = (text)=>{
    result.current.innerText = text
  }

  const handleCode = (event) => {
    // Lógica de manipulação, removendo caracteres indesejados
    let sanitizedValue = event.target.value.replace(/[^0-9a-z]/ig, '');
    sanitizedValue = sanitizedValue.slice(-4);
    setCode(sanitizedValue)
  };
  
  function handleClick(){
    if(code == "----"  || code.length < 4 ){
      setLocal("Digite uma chave de 4 digitos")
    }else{
      let key = Engine.createKey(code)
      let spy = Engine.isSpy(key[0])
      let local = Engine.local(key[1])
      spy ? setLocal('Espião'):setLocal(local)
    }
  }

  function handleHidden(){
    if(code == "----"  || code.length < 4 ){
      result.current.innerText = "Digite uma chave de 4 digitos"
    }else{
      result.current.innerText = "¿?¿?¿?"
    }
  }
  
  return (
    <div className="container-sm" role="document">
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
        <div id="header" className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 onClick={handleClick} className="fw-bold mb-0 fs-2 button-like" role="button">Who is Spy?</h1>
              <h4 onClick={handleHidden}  ref={result}  role="button">¿?¿?¿?</h4>
          </div>
          <div id="body" className="modal-body p-5 pt-0">
              <div id="editable" className="form-floating mb-3">
                  <input value={code} onChange={handleCode} id="key" className="form-control text-center rounded-6"/>
                  <label htmlFor="floatingInput">[KEY-{Engine.hash(code)}]</label>
              </div>
          </div>
          <div id="result" className="card collapse">
              <div className="card-body">
                  <h5 id="conteudo" className="card-title">Digite uma chave de 4 caracteres</h5>
                  <p className="card-text"><small id="oldKey" className="text-body-secondary">Key: _ _ _ _</small></p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}





// /////////////////////////////////
// //MANIPULAÇÃO PAGINA
// /////////////////////////////////


// let toggleable = true;
// let time = 5000; // 5000 milissegundos = 5 segundos
// function toggleElements() {
//     const editable = document.getElementById('editable');
//     const result = document.getElementById('result');
//     const body = document.getElementById('body');
//     const header = document.getElementById('header').getElementsByClassName('modal-header')[0]
//     if(toggleable){
//         // Alternar as classes para mostrar ou ocultar os elementos
//         editable.classList.toggle('collapse');
//         result.classList.toggle('collapse');
//         body.classList.toggle('collapse');
//         header.classList.toggle('d-flex');
//         header.classList.toggle('justify-content-center');
//         header.classList.toggle('align-items-center');
        
//                 toggleable=false;
//         setTimeout(function() {
//             editable.classList.toggle('collapse');
//             result.classList.toggle('collapse');
//             body.classList.toggle('collapse');
//             header.classList.toggle('d-flex');
//             header.classList.toggle('justify-content-center');
//             header.classList.toggle('align-items-center');
//                         toggleable = true;
//         }, time);
//     }
// }


// const key = document.getElementById('key');
// const oldKey = document.getElementById('oldKey');

// function replace(event) {
//     let regex = /[^a-zA-Z0-9]/g;
//     let value_aux = key.value
//     if (value_aux.match(regex)) {
//         value_aux = value_aux.replace(regex, '');
//     }
//     while (value_aux.length < 5) {
//         value_aux = "0"+value_aux 
//     }
//     value_aux = value_aux.slice(1)
//     key.value = value_aux


// };

// key.addEventListener('input',(event)=>{
//     replace(event);
//     const key = document.getElementById('key').value.toString()
//     document.getElementById("oldKey").innerHTML="Key:"+key+" -> "+hash(key)
//     result( createKey(key) )

// })

export default Play;