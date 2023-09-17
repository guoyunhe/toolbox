import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import AppLayout from './layouts/app';

const JsonPage = lazy(() => import('./pages/json'));
const XmlPage = lazy(() => import('./pages/xml'));
const ColorPage = lazy(() => import('./pages/color'));
const SvgPage = lazy(() => import('./pages/svg'));
const SvgToReactPage = lazy(() => import('./pages/svg-to-react'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'json',
        element: <JsonPage />,
      },
      {
        path: 'xml',
        element: <XmlPage />,
      },
      {
        path: 'svg',
        element: <SvgPage />,
      },
      {
        path: 'svg-to-react',
        element: <SvgToReactPage />,
      },
      {
        path: 'color',
        element: <ColorPage />,
      },
    ],
  },
];

export default routes;
