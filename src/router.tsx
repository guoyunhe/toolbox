import { lazy } from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import AppLayout from './layouts/app';

// 1451kB, 需要优化
const JsonToTypePage = lazy(() => import('./pages/json-to-type'));
const JsonFormatPage = lazy(() => import('./pages/json-format'));
const JsonTreePage = lazy(() => import('./pages/json-tree'));
const XmlPage = lazy(() => import('./pages/xml'));
const ColorPage = lazy(() => import('./pages/color'));
// 637kB, 需要优化
const SvgMinifyPage = lazy(() => import('./pages/svg-minify'));
const SvgToCssPage = lazy(() => import('./pages/svg-to-css'));
const SvgToUrlPage = lazy(() => import('./pages/svg-to-url'));
const SvgToReactPage = lazy(() => import('./pages/svg-to-react'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'json-format',
        element: <JsonFormatPage />,
      },
      {
        path: 'json-tree',
        element: <JsonTreePage />,
      },
      {
        path: 'json-to-type',
        element: <JsonToTypePage />,
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
        path: 'svg-to-url',
        element: <SvgToUrlPage />,
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
