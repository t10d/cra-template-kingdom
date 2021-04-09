import { RouteProps } from 'react-router-dom';
import User from '../pages/User';

const routes: RouteProps[] = [
  {
    path: '/user',
    exact: true,
    component: User,
  },
];

export default routes;
