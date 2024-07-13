import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/Hero';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Destinations from './components/Destinations';
import Reviews from './components/Reviews';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />
  },
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/destinations",
    element: <Destinations />,
  },
  {
    path: "/reviews",
    element: <Reviews />,

  },
  { 
    path: "/login",
    element: <LoginForm />,  
  },
  {
    path: "/signup",
    element: <SignupForm />, 
  }
])
root.render(
  <React.StrictMode>
       <ScrollToTop />
       <Navbar />
    <RouterProvider router={router} />
      </React.StrictMode>
)
