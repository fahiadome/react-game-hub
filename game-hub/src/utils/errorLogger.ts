interface ErrorInfo {
  componentStack?: string | null;
  errorBoundary?: string;
}

export const logError = (error: Error, errorInfo?: ErrorInfo): void => {
  console.error('Error Boundary caught an error:', {
    error: {
      name: error.name,
      message: error.message,
      stack: error.stack,
    },
    errorInfo: {
      componentStack: errorInfo?.componentStack,
      errorBoundary: errorInfo?.errorBoundary,
    },
    timestamp: new Date().toISOString(),
  });
};

