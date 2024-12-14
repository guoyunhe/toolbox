import pRetry from 'p-retry';
import { lazy } from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import AppLayout from './layouts/app';

const JsonFormatPage = lazy(() => pRetry(() => import('./pages/json-format')));
const JsonTreePage = lazy(() => pRetry(() => import('./pages/json-tree')));
const JsonToTypePage = lazy(() => pRetry(() => import('./pages/json-to-type')));
const JsonFlattenPage = lazy(() => pRetry(() => import('./pages/json-flatten')));
const JsonUnflattenPage = lazy(() => pRetry(() => import('./pages/json-unflatten')));
const JsonToUrlPage = lazy(() => pRetry(() => import('./pages/json-to-url')));

const ListDedupPage = lazy(() => pRetry(() => import('./pages/list-dedup')));

const XmlPage = lazy(() => pRetry(() => import('./pages/xml')));
const ColorPage = lazy(() => pRetry(() => import('./pages/color')));
// 637kB, 需要优化
const SvgMinifyPage = lazy(() => pRetry(() => import('./pages/svg-minify')));
const SvgToCssPage = lazy(() => pRetry(() => import('./pages/svg-to-css')));
const SvgToUrlPage = lazy(() => pRetry(() => import('./pages/svg-to-url')));
const SvgToReactPage = lazy(() => pRetry(() => import('./pages/svg-to-react')));

const UrlToJsonPage = lazy(() => pRetry(() => import('./pages/url-to-json')));

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
        path: 'json-flatten',
        element: <JsonFlattenPage />,
      },
      {
        path: 'json-unflatten',
        element: <JsonUnflattenPage />,
      },
      {
        path: 'json-to-url',
        element: <JsonToUrlPage />,
      },
      {
        path: 'list-dedup',
        element: <ListDedupPage />,
      },
      {
        path: 'url-to-json',
        element: <UrlToJsonPage />,
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
