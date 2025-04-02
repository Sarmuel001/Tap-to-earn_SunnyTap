import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Team from './src/components/MenuContent';
import Home from './src/components/home';
import Quests from './src/components/MenuContent/Socialquests';
import DailyQuiz from './src/components/MenuContent/Quiz';
import AboutUs from './src/components/MenuContent/OurTeam';

export const router = createBrowserRouter([
  {
      path:"/",
      element: <Home />
  },
  {
      path:"/MenuContent",
      element: <Team />
   },
   {
       path:"/MenuContent",
       element: <Quests/>
   },
 {
       path:"/MenuContent",
       element:<DailyQuiz/>
   },
 {
       path:"/OurTeam",
       element:<AboutUs />
   },
])
