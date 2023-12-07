// PopupPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../componentes/button/button.jsx'


const vh_75 = {
  width: "100vw",
  margin: "0",
  display: "flex",
  flexDirection: "column", // Alterado para exibir os elementos em coluna
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const Home = () => {
  return (
    <>
      <div style={vh_75} >      
        <Link to="/play">
            <Button minWidth="300px" id="start" className="p-3 my-3"  buttonColor="345deg" >Start </Button>
        </Link>
        <div style={{ margin: '10px' }} ></div>
        <Link to="/conf">
            <Button minWidth="300px" id="conf"  className="p-3 my-3" buttonColor="345deg" >Configurar </Button>
        </Link>
      </div>
    </>
  );
};



export default Home;

