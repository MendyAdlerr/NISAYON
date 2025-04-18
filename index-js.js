// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // כאן תצטרך להוסיף קובץ CSS בסיסי או להשתמש ב-Tailwind
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
