// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Principal from './Principal.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Principal></Principal>
  </StrictMode>,
)