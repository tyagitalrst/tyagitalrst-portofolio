import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import ButtonAppBar from './components/Appbar';
import FullWidthGrid from './components/Layout';
import AOS from 'aos'; 
import '../node_modules/aos/dist/aos.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1F2933',
      contrastText: '#F5F7FA'
    },
    secondary: {
      main: '#00897B',
      contrastText: '#F5F7FA'
    },
    info: {
      main: '#CBD2D9'
    },
    success: {
      main: '#3E4C59'
    },
    warning: {
      main: '#F5F7FA',
      contrastText: '#FFE380'
    },
    background: {
      default: '#1F2933',
      paper: '#3E4C59'
    },
  }
});

function App() {
  AOS.init()
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <ButtonAppBar />
        <FullWidthGrid />
      </div>
    </ThemeProvider>
  );
}

export default App;
