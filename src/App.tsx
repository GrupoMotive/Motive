import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import { Aulas } from './paginas/aulas/Aulas';
import { Contato } from './paginas/contato/Contato';
import { Home } from './paginas/home/Home';
import { Login } from './paginas/login/Login';
import { Sobre } from './paginas/sobre/Sobre';
import RoutesApp from './routes';


function App() {
  return (
    <>
      <Navbar />
      <RoutesApp />
      <Footer />
    </>

  );
}


export default App;