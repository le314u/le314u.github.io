// PopupPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div >      
      <Link to="/conf">
        <button id="start" type="button" className="btn btn-primary form-control rounded-3 p-3 my-5" data-bs-dismiss="modal" aria-label="Start">Start</button>
        <button id="conf" type="button" className="btn btn-primary form-control rounded-3 p-3 my-5" data-bs-dismiss="modal" aria-label="Configurar">Configurar</button>
      </Link>
    </div>
  );
};

export default Home;

