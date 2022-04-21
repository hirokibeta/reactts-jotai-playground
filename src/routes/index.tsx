import { RouteObject, useRoutes } from 'react-router-dom';
import { Layout } from '@src/pages/Layout';
import { Home } from '@src/pages/Home';
import { NotFound } from '@src/pages/NotFound';
import { Jotai } from '@src/pages/Jotai';
import { JotaiIssues1054 } from '@src/pages/JotaiIssues1054';
import { JotaiBug } from '@src/pages/JotaiBug';
import { React18 } from '@src/pages/React18';
import { JotaiLoadableBug } from '@src/pages/JotaiLoadableBug';
import { JotaiSplitAtom } from '@src/pages/JotaiSplitAtom';

export function AppRoutes() {
  const routes: RouteObject[] = [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/jotai',
          element: <Jotai />,
        },
        {
          path: '/jotai-split-atom',
          element: <JotaiSplitAtom />,
        },
        {
          path: '/jotai-issue-1054',
          element: <JotaiIssues1054 />,
        },
        {
          path: '/jotai-bug',
          element: <JotaiBug />,
        },
        {
          path: '/jotai-loadable-bug',
          element: <JotaiLoadableBug />,
        },
        {
          path: '/react18',
          element: <React18 />,
        },
        { path: '*', element: <NotFound /> },
      ],
    },
  ];

  const element = useRoutes([...routes]);

  return element;
}
