import { FunctionComponent } from 'react';
import HomePage from '../components/Home/HomePage';
import Login from '@/components/Pages/Login/Login';

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
];
