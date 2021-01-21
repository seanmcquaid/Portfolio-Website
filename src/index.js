import reactAxe from '@axe-core/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import App from './App';
import './index.css';

reactAxe(React, ReactDOM, 1000, {});

const Root = () => (
  <React.Fragment>
    <Normalize />
    <App />
  </React.Fragment>
);

ReactDOM.render(<Root />, document.getElementById('root'));
