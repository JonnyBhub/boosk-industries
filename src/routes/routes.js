// routes.js

import Home from './Home';
import Notes from '../pages/notes'
import cardPage from '../pages/cardPage'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/notes',
    component: Notes,
  },
  {
    path: '/app',
    component: MyApp,
  },
];

export default routes;