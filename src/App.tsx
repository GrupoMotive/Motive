import React from 'react';
import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';
import RoutesApp from './routes';
import "./global.css"

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    green: {
      main: "#0DCA70"
    }
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    green: Palette['secondary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    green?: PaletteOptions['secondary'];

  }
}
// Update the Button's color prop options
declare module '@mui/material' {
  interface TextFieldPropsColorOverrides {
    neutral: true;
    green: true;
  }
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RoutesApp />
        <ToastContainer className={'toast-style'} />
      </ThemeProvider>
    </>
  );
}

export default App;