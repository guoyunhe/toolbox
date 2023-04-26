import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import AppLayout from './layouts/app';
import LandingLayout from './layouts/landing';
import NotFound from './pages/error/not-found';
import Home from './pages/home';

const JsonPage = lazy(() => import('./pages/json'));
const ColorPage = lazy(() => import('./pages/color'));

const AboutPage = lazy(() => import('./pages/about'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'json',
        element: <JsonPage />,
      },
      {
        path: 'color',
        element: <ColorPage />,
      },
    ],
  },
];

export default routes;
