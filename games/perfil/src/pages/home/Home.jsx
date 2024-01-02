// PopupPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../componentes/button/button.jsx'




const Home = () => {
  return (
    <>
      <div style={{ width: "100vw", margin: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", }} >      
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

