// PopupPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/">Iniciar</Link>
      <br></br>
      <Link to="/conf">Config Popup</Link>
    </div>
  );
};

export default Home;

