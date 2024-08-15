import { FunctionComponent } from 'react';
import HomePage from '../components/Home/HomePage';
import Login from '@/components/Pages/Login/Login';
import Error404 from '@/components/Pages/Error404/Error404';

interface IRoutes {
  path: string;
  component: FunctionComponent;
}

export const routes: IRoutes[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '*',
    component: Error404,
  },
];
