import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/static/footer';
import Navbar from './components/static/navbar';

import About from './pages/about';
import Classes from './pages/classes';
import Contact from './pages/contact';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

export default function RoutesApp() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aulas' element={<Classes />} />
        <Route path='/contato' element={<Contact />} />
        <Route path='/sobre' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}
