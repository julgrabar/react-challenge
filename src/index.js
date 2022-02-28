import React from 'react';
import { ThemeProvider } from "styled-components";
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';

const theme = {
  colors: {
    headerColor: '#ebfbff',
    bodyColor: '#ffffff',
    footerColor: '#003333'
  },
  mobile: '768px',
}

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
</React.StrictMode>,
  document.getElementById('root')
);
