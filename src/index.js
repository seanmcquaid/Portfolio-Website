import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

const App = React.lazy(() => import('./App'));

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

ReactDOM.render(
  <React.Suspense fallback={null}>
    <GlobalStyle />
    <App />
  </React.Suspense>,
  document.getElementById('root')
);
