import type { ReactNode } from 'react';

import { EmptyView } from './EmptyView';
import { ErrorView } from './ErrorView';
import { LoadingView } from './LoadingView';

export interface LoadingErrorRetryFallback {
  loading?: ReactNode;
  error?: ReactNode;
  nodata?: ReactNode;
}

export interface LoadingErrorRetryViewProps {
  loading?: boolean;
  error?: boolean;
  noData?: boolean;
  retry?: () => void;
  loadingMessage?: string;
  errorMessage?: string;
  noDataMessage?: string;
  fallback?: LoadingErrorRetryFallback;
  children?: ReactNode;
}

export function LoadingErrorRetryView({
  loading = false,
  error = false,
  noData = false,
  retry,
  loadingMessage,
  errorMessage,
  noDataMessage,
  fallback,
  children,
}: LoadingErrorRetryViewProps) {
  if (loading) {
    return <>{fallback?.loading ?? <LoadingView message={loadingMessage} />}</>;
  }

  if (error) {
    return (
      <>
        {fallback?.error ?? (
          <ErrorView message={errorMessage} onRetry={retry} />
        )}
      </>
    );
  }

  if (noData) {
    return (
      <>
        {fallback?.nodata ?? (
          <EmptyView message={noDataMessage} onRetry={retry} />
        )}
      </>
    );
  }

  return <>{children}</>;
}
