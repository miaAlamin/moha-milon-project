import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home';
import MainLayout from './components/MainLayout';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import Orders from './components/Orders';
import PrivateRouter from './components/privateRouter/PrivateRouter';
import Profile from './components/privateRouter/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'orders',
        element: <PrivateRouter><Orders/></PrivateRouter>
      },
      {
        path: 'profile',
        element: <PrivateRouter><Profile/></PrivateRouter>
      }
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
