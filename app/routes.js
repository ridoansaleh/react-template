import React from 'react';
import App from './component/App.jsx';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Career from './component/Career.jsx';

const routes = [
  { 
  	component: App,
    routes: [
      { 
      	path: '/',
        exact: true,
        component: Home
      },
      { 
      	path: '/about',
        component: About
      },
      { 
      	path: '/career',
        component: Career
      }
    ]
  }
];

export default routes;