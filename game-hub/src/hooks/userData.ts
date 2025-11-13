import apiClient from '@/Services/api-client';
import { CanceledError, type AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { parseError } from '@/utils/errorHandler';
import type { ApiError } from '@/types/errors';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[]
) => {
  const [data, setData] = useState<FetchResponse<T>>();
  const [error, setError] = useState<ApiError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const requestConfigRef = useRef(requestConfig);

  requestConfigRef.current = requestConfig;

  useEffect(() => {
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setError(null);
    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfigRef.current,
      })
      .then((response) => {
        if (!controller.signal.aborted) {
          setData(response.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }

        if (!controller.signal.aborted) {
          const parsedError = parseError(err);
          setError(parsedError);
          setIsLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, ...(deps || [])]);

  const retry = useCallback(() => {
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setError(null);
    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfigRef.current,
      })
      .then((response) => {
        if (!controller.signal.aborted) {
          setData(response.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }

        if (!controller.signal.aborted) {
          const parsedError = parseError(err);
          setError(parsedError);
          setIsLoading(false);
        }
      });
  }, [endpoint]);

  return { data, error, isLoading, retry };
};

export default useData;
