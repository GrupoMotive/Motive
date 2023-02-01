import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './pages/about';
import Check from './pages/check/Check';
import Classes from './pages/classes';
import Home from './pages/home';
import Login from './pages/login';
import Product from './pages/product';
import Register from './pages/register';
import store from './store/store';

export default function RoutesApp() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aulas' element={<Classes />} />
            <Route path='/sobre' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/produto/:id' element={<Product />} />
            <Route path='/check/:id' element={<Check />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}
