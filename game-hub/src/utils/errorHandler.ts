import { AxiosError } from 'axios';
import type { ApiError } from '@/types/errors';

export const parseError = (error: unknown): ApiError => {
  if (error instanceof AxiosError) {
    const axiosError = error as AxiosError;
    if (axiosError.code === 'ERR_NETWORK' || axiosError.message.includes('Network Error')) {
      return {
        type: 'network',
        message: 'Unable to connect to the server. Please check your internet connection.',
        originalError: axiosError,
      };
    }

    const statusCode = axiosError.response?.status;
    const statusText = axiosError.response?.statusText || 'Unknown error';

    let message = 'An error occurred while fetching data.';
    
    switch (statusCode) {
      case 400:
        message = 'Invalid request. Please check your input and try again.';
        break;
      case 401:
        message = 'Authentication failed. Please check your API key.';
        break;
      case 403:
        message = 'Access denied. You do not have permission to access this resource.';
        break;
      case 404:
        message = 'The requested resource was not found.';
        break;
      case 429:
        message = 'Too many requests. Please wait a moment and try again.';
        break;
      case 500:
        message = 'Server error. Please try again later.';
        break;
      case 503:
        message = 'Service unavailable. Please try again later.';
        break;
      default:
        if (statusCode) {
          message = `Error ${statusCode}: ${statusText}`;
        }
    }

    return {
      type: 'api',
      message,
      statusCode,
      originalError: axiosError,
    };
  }

  if (error instanceof Error) {
    return {
      type: 'unknown',
      message: error.message || 'An unexpected error occurred.',
      originalError: error,
    };
  }

  return {
    type: 'unknown',
    message: 'An unexpected error occurred. Please try again.',
    originalError: error,
  };
};

