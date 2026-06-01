import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CuisinePage from './components/CuisinePage.jsx';
import './styles/global.css';

// Routage minimal : /cuisine = écran cuisine (accès commerçant), sinon le site client.
const isKitchen = window.location.pathname.replace(/\/+$/, '').toLowerCase().endsWith('/cuisine')
  || window.location.pathname.toLowerCase() === '/cuisine';

ReactDOM.createRoot(document.getElementById('root')).render(
  isKitchen ? <CuisinePage /> : <App />
);
