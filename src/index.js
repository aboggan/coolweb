import { createMuiTheme } from '@material-ui/core';
import { esES } from '@material-ui/data-grid';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Footer from './components/Footer';
import './index.css';
import reportWebVitals from './reportWebVitals';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0a714b'
    },
    secondary: {
      main: '#575757'
    }
  }
}, esES)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
