export type ErrorType = 'network' | 'api' | 'validation' | 'unknown';

export interface ApiError {
  type: ErrorType;
  message: string;
  statusCode?: number;
  originalError?: unknown;
}

export interface NetworkError extends ApiError {
  type: 'network';
}

export interface ValidationError extends ApiError {
  type: 'validation';
}

