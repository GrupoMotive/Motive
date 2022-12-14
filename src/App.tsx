import React from 'react';
import { CssBaseline } from '@mui/material';
import RoutesApp from './routes';
import "./global.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <CssBaseline />
      <RoutesApp />
      <ToastContainer />
    </>
  );
}

export default App;