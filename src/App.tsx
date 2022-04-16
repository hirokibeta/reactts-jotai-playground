import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@src/routes';
import { Provider } from 'jotai';
import { AppThemeProvider } from '@src/common/components/AppThemeProvider';
import { Loading } from './common/components/Loading';

// TODO: error boundary
export function App() {
  return (
    <Provider>
      <AppThemeProvider>
        <Suspense fallback={Loading()}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </Suspense>
      </AppThemeProvider>
    </Provider>
  );
}
