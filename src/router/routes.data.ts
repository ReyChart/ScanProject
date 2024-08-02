import { FunctionComponent } from 'react';
import HomePage from '../components/Home/HomePage';

interface IRoutes {
  path: string;
  component: FunctionComponent;
}

export const routes: IRoutes[] = [
  {
    path: '/',
    component: HomePage,
  },
];
