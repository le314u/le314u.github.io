// PopupPage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../componentes/button/button.jsx'




const Home = () => {
  useEffect(()=>{sessionStorage.clear()},[])

  return (
    <>
      <div style={{ width: "100vw", margin: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", }} >      
        {/*
        <Link to="/play">
            <Button minWidth="300px" id="start" className="p-3 my-3"  buttonColor="345deg" >Start </Button>
        </Link>
        <Space/> 
        */}
        <Link to="/conf">
            <Button minWidth="300px" id="conf"  className="p-3 my-3" buttonColor="345deg" >Jogar </Button>
        </Link>
      </div>
    </>
  );
};



export default Home;

function Space(){
  return <div style={{ margin: '10px' }} ></div>

}

