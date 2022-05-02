import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Grid, Breakpoint, } from 'react-bootstrap'
import Bestilling from './views/Bestilling'
import Landing from './views/Landing';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './style/variables.scss';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />}/>
          <Route path="/bestilling" element={<Bestilling />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
