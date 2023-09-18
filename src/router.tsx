import { lazy } from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import AppLayout from './layouts/app';

// 1451kB, 需要优化
const JsonPage = lazy(() => import('./pages/json'));
const XmlPage = lazy(() => import('./pages/xml'));
const ColorPage = lazy(() => import('./pages/color'));
// 637kB, 需要优化
const SvgMinifyPage = lazy(() => import('./pages/svg-minify'));
const SvgToCssPage = lazy(() => import('./pages/svg-to-css'));
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
        path: 'svg-minify',
        element: <SvgMinifyPage />,
      },
      {
        path: 'svg-to-css',
        element: <SvgToCssPage />,
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

const router = createBrowserRouter(routes);

export default router;
