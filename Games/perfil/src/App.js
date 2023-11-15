// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Conf from './pages/conf/Conf'
import Home from './pages/home/home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/conf" element={<Conf/>} />
      </Routes>
    </Router>
  );
};

export default App;



