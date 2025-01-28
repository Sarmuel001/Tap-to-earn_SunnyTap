import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Team from './src/components/MenuContent';
import Home from './src/components/home';

export const router = createBrowserRouter([
  {
      path:"/",
      element: <Home />
  },
  {
      path:"/OurTeam",
      element: <Team />
   }
  // {
  //     path:"/receipt",
  //     element: <Receipt/>
  // },
  // {
  //     path:"/productCard",
  //     element:<ProductCard/>
  // }
])
