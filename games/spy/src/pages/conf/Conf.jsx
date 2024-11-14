import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../componentes/button/button';
import 'bootstrap/dist/css/bootstrap.min.css';



  
function Conf() {
  const [numPlayer, setNumPlayer] = useState(1);
  const [maxPlayer, setMaxPlayer] = useState(3);

  const handleId = (event) => {
    // Lógica de manipulação, removendo caracteres indesejados
    const sanitizedValue = parseInt( event.target.value.replace(/[^0-9]/g, '') )
    if(Number.isNaN(sanitizedValue)){
      setNumPlayer(1)
      return
    }
    sanitizedValue <= maxPlayer ? setNumPlayer(sanitizedValue) : setNumPlayer(maxPlayer);     
  };

  const handleTotal = (event) => {
    const sanitizedValue = parseInt( event.nativeEvent.target.value.replace(/[^0-9]/g, '') )
    // Lógica de manipulação, removendo caracteres indesejados
    const newValue = sanitizedValue == '' ? numPlayer : sanitizedValue
    if(Number.isNaN(newValue)){
      setNumPlayer(1)
      setMaxPlayer(1)
      return
    }
    if(newValue < numPlayer){
      setNumPlayer(newValue)
      setMaxPlayer(newValue) 
    }else{
      setMaxPlayer(newValue) 
    }
  };

  function handleClick(){
    sessionStorage.setItem("numPlayer", numPlayer);
    sessionStorage.setItem("maxPlayer", maxPlayer);
  }


  return (

    <div className="container-sm" role="document">
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Logando</h1>
          </div>

          <div className="modal-body p-5 pt-0">
            <form className="" data-bitwarden-watching="1">

              <div className="form-floating mb-3">
                <input value={numPlayer} onChange={handleId} id="numPlayer"   className="form-control rounded-3"  min="1" max="3" maxLength="4"/>
                <label htmlFor="floatingInput">[ID do Jogador]</label>
              </div>

              <div className="form-floating mb-3">
                <input value={maxPlayer} onChange={handleTotal} className="form-control rounded-3"  min="3" max="14" maxLength="4"/>
                <label htmlFor="floatingPassword">[Total de jogadores]</label>
              </div>

              <Link to="/play">
                <div className="form-floating mb-3" onClick={handleClick}>
                  <Button id="conf"  className="p-3 my-3" buttonColor="345deg" >Start </Button>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Conf;