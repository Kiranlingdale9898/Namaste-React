import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Error from './Error';
import Contact from './Contact';
import Body from './components/Body';
import HotelDetails from "./components/HotelDetails";
import {lazy} from 'react';
import Shimmer from './components/Shimmer';
// import Instamart from './components/Instamart';

const Instamart = lazy(()=> import  ( './components/Instamart')
)

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/Contact',
        element: <Contact/>
      }, 
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/HotelDetails/:id',
        element: <HotelDetails/>
      },
      {
        path: '/instamart',
        element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
