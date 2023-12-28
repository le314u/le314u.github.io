// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Conf from './pages/conf/Conf'
import Home from './pages/home/Home';
import Play from './pages/play/Play';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conf" element={<Conf />} />
        <Route path="/play" element={<Play />} />
      </Routes>
  );
};

export default App;