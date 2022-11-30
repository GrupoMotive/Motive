import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import { Aulas } from './paginas/aulas/Aulas';
import { Contato } from './paginas/contato/Contato';
import { Home } from './paginas/home/Home';
import { Login } from './paginas/login/Login';
import { Sobre } from './paginas/sobre/Sobre';

function App(){
  return (
  <Router>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/aulas' element={<Aulas/>} />
    <Route path='/contato' element={<Contato />}/>
    <Route path='/sobre' element={<Sobre />} />
    <Route path='/login' element={<Login />} />
  </Routes>
  </Router>
  );
}

export default App;