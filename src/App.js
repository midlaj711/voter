import React from 'react';
import Home from '../src/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/Pages/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         

        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
