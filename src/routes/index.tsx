import { RouteObject, useRoutes } from 'react-router-dom';
import { Layout } from '@src/pages/Layout';
import { Home } from '@src/pages/Home';
import { NotFound } from '@src/pages/NotFound';

export function AppRoutes() {
  const routes: RouteObject[] = [
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        { path: '*', element: <NotFound /> },
      ],
    },
  ];

  const element = useRoutes([...routes]);

  return element;
}
