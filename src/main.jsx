import React from 'react'
import ReactDOM from 'react-dom/client'
// Bring required imports from react-router-dom to set up app routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './'

import App from './App.jsx'
import AboutMe from './assets/pages/AboutMe.jsx';
import ContactMe from './assets/pages/ContactMe.jsx';
import ErrorPage from './assets/pages/ErrorPage.jsx';
import HomePage from './assets/pages/HomePage.jsx';
import Portfolio from './assets/pages/Portfolio.jsx';
import Resume from './assets/pages/Resume.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      {
        path: '/ContactMe',
        element: <ContactMe />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
