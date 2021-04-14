import reactAxe from '@axe-core/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Karla';
    color: white;
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

if (process.env.NODE_ENV === 'development') {
  reactAxe(React, ReactDOM, 1000, {});
}

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
