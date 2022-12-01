import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme } from '@material-ui/core';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

