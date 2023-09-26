import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './pages/Home/Home';
import Donation from './pages/Donation/Donation';
import Statistic from './pages/Statistics/Statistic';
import DonationDetail from './component/DonationDetail/DonationDetail';
import ErrorPage from './component/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: '/',
    errorElement:<ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/donation',
        element:<Donation></Donation>,
        loader: () => fetch('donation.json')
      },
      {
        path:'/catagory/:id',
        loader:() => fetch('donation.json'),
        element:<DonationDetail></DonationDetail>
      },
      {
        path:'/statistic',
        loader:() => fetch('donation.json'),
        element:<Statistic></Statistic>
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
