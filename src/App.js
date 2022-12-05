import './App.css';
import React, { Component, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cuerpo from './components/Cuerpo.js'
import Principal from './components/Principal.js'
function App() {
  let dataUsuarios = [
    { "nombre": "daniela", "passwd": "1234", "estado": "cliente" },
    { "nombre": "genaro", "passwd": "1234", "estado": "cliente" },
    { "nombre": "nisi", "passwd": "1234", "estado": "trabajador" },
    { "nombre": "gabriel", "passwd": "1234", "estado": "trabajador" },
    { "nombre": "nancy", "passwd": "1234", "estado": "trabajador" }
  ]
  const [nombre, setNombre] = useState('');
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Principal data={dataUsuarios} setNombre={setNombre} />}></Route>

          <Route exact path="/cuerpo/" element={<Cuerpo nombre={nombre} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
