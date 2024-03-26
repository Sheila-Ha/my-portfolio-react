import React from 'react'
import ReactDOM from 'react-dom/client'
// Bring required imports from react-router-dom to set up app routing
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
