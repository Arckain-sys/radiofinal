import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/scss/bootstrap.scss";
import "./assets/scss/paper-kit.scss?v=1.3.0";
import "./assets/demo/demo.css?v=1.3.0";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
