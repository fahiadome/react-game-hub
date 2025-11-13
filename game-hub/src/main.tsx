import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

import { Provider } from '@/components/ui/provider';
import ErrorFallback from '@/components/Common/ErrorFallback';
import { logError } from '@/utils/errorLogger';

import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        logError(error, {
          componentStack: errorInfo.componentStack ?? undefined,
          errorBoundary: 'Root',
        });
      }}
      onReset={() => {
        window.location.reload();
      }}
    >
      <Provider>
        <App />
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
