import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'normalize.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/cottage-quest">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
