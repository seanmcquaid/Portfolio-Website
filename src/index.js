import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Karla from './fonts/Karla-Regular.ttf';
import Rubik from './fonts/Rubik-Regular.ttf';

const App = React.lazy(() => import('./App'));

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Karla';
    src: url(${Karla}) format('truetype');
  }

  @font-face {
  font-family: 'Rubik';
    src: url(${Rubik}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    color: white;
    font-family: Karla;
    background-color: #1c3a2f;
    line-height: 1.5rem;
    height: 100%;
    width: 100%;
  }

  html,
  #root {
    height: 100%;
    width: 100%;
  }
`;

ReactDOM.render(
  <React.Suspense fallback={null}>
    <GlobalStyle />
    <App />
  </React.Suspense>,
  document.getElementById('root')
);
