import { RouteProps } from 'react-router-dom';
import Login from '../pages/Login';

const routes: RouteProps[] = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
];

export default routes;
