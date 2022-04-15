import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@src/routes';
import { ErrorFallback } from '@src/common/components/ErrorFallback';
import { AppThemeProvider } from '@src/common/components/AppThemeProvider';

export function App() {
  return (
    <Suspense fallback={ErrorFallback()}>
      <AppThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppThemeProvider>
    </Suspense>
  );
}
