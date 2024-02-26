import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface Response<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: unknown[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const controller = new AbortController();
    setLoading(true);
    try {
      const response = await apiClient.get<Response<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      });
      console.log(response.data.results);
      setData(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
    return () => controller.abort();
  };

  useEffect(
    () => {
      fetchData();
    },
    dependencies ? [...dependencies] : []
  );

  return { data, loading };
};

export default useData;
