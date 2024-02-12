import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <Routes />
   </React.StrictMode>
);

reportWebVitals();