import fetch from "cross-fetch";
import { useCallback, useEffect, useState } from "react";
const queryBuilder = (params: Record<string, string> | undefined) =>
  params !== undefined ? "?" + new URLSearchParams(params).toString() : "";

// const fileToBlob = async (file: File) =>
//   new Blob([new Uint8Array(await file.arrayBuffer())], { type: file.type });

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

export const postRequestBuilderFile = <T>(
  url: string,
  params?: Record<string, string>,
) => {
  const controller = new AbortController();
  const urlQueryString = queryBuilder(params);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  return {
    fn: async (body: File): Promise<T> => {
      const formData = new FormData();

      formData.append("file", body);

      const response = await fetch(url + urlQueryString, {
        method: "POST",
        signal: controller.signal,
        body: formData,
      });
      if (!response.ok) {
        const text = await response.text();

        throw new Error(
          `code: ${response.status}, ${response.statusText}. message: ${text}`,
        );
      }
      const data = await response.json();
      return data;
    },
    ct: controller,
  };
};

export const postRequestBuilderJSON = <T, F>(
  url: string,
  params?: Record<string, string>,
) => {
  const controller = new AbortController();
  const urlQueryString = queryBuilder(params);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  return {
    fn: async (body: F): Promise<T> => {
      const response = await fetch(url + urlQueryString, {
        method: "POST",
        headers,
        signal: controller.signal,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(
          `code: ${response.status}, error: ${response.statusText} ${response.body}`,
        );
      }
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
        setError(`${error} failed request `);
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
