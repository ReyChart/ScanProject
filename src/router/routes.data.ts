import { FunctionComponent } from 'react';
import HomePage from '../components/Home/HomePage';
import Login from '@/components/Pages/Login/Login';
import Search from '@/components/Pages/Search/Search';
import Error404 from '@/components/Pages/Error404/Error404';
import SearchResult from '@/components/Pages/SearchResult/SearchResult';

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
    path: '/search',
    component: Search,
  },
  {
    path: '/result',
    component: SearchResult,
  },
  {
    path: '*',
    component: Error404,
  },
];
