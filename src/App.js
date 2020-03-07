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
      main: '#22262A',
      contrastText: '#ECD5BB'
    },
    secondary: {
      main: '#00735C',
      contrastText: '#ECD5BB'
    },
    info: {
      main: '#786F62'
    },
    success: {
      main: '#FED766'
    },
    warning: {
      main: '#ECD5BB'
    },
    background: {
      default: '#22262A',
      paper: '#FED766'
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
