import reactAxe from '@axe-core/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

reactAxe(React, ReactDOM, 1000, {});

ReactDOM.render(<App />, document.getElementById('root'));
