import fetch from "cross-fetch";
import { useCallback, useEffect, useState } from "react";

export interface IRequestReponse<T> {
  error: boolean;
  errorMessage: unknown | undefined;
  data: T | undefined;
}

export const SERVICE_DOMAINS = {
  VALIDATION_DOMAIN: "http://localhost:3000",
};

export const validationEndpoints = {
  record: "/api/validator",
};

const queryBuilder = (params: Record<string, string> | undefined) =>
  params !== undefined ? "?" + new URLSearchParams(params).toString() : "";

export const getRequestBuilder = (
  url: string,
  params?: Record<string, string>,
) => {
  const controller = new AbortController();
  const urlQueryString = queryBuilder(params);

  const headers = new Headers();
  headers.append("Accept", "application/json");

  return {
    fn: fetch(url + urlQueryString, {
      method: "GET",
      headers,
      signal: controller.signal,
    }),
    ct: controller,
  };
};

export const postRequestBuilder = <T, F>(
  url: string,
  params?: Record<string, string>,
) => {
  const controller = new AbortController();
  const urlQueryString = queryBuilder(params);
  console.log(urlQueryString);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  return {
    fn: async (body: F): Promise<T> => {
      const response = await fetch(url, {
        method: "POST",
        headers,
        signal: controller.signal,
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    },
    ct: controller,
  };
};

export const useFetchRequestHookBuilder = <T>(request: {
  fn: () => Promise<T>;
  ct: AbortController;
}) => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsPending(true);
    try {
      const data = await request.fn();
      setIsPending(false);
      setData(data);
      setError(null);
    } catch (error) {
      setError(`${error} Could not Fetch Data `);
      setIsPending(false);
    }
  }, [request]);

  useEffect(() => {
    fetchData();

    return request.ct.abort();
  }, [fetchData, request.ct]);

  return { data, isPending, error };
};

export const usePostRequestHookBuilder = <F, T>(request: {
  fn: (par: F) => Promise<T>;
  ct: AbortController;
}) => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postData = useCallback(
    async (body: F) => {
      setIsPending(true);
      try {
        const data = await request.fn(body);
        setIsPending(false);
        setData(data);
        setError(null);
      } catch (error) {
        setError(`${error} Could not Fetch Data `);
        setIsPending(false);
      }
    },
    [request],
  );

  return {
    data,
    isPending,
    error,
    postReqest: postData,
    abortController: request.ct,
  };
};
