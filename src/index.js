import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const { createRoot } = require('react-dom/client');

const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootDOM = createRoot(root);
rootDOM.render(rootElement);

reportWebVitals();
