import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Response<T>{
    count: number;
    results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const controller = new AbortController();
    setLoading(true);
    try {
      const response = await apiClient.get<Response<T>>(endpoint, {signal: controller.signal});
      console.log(response.data.results);
      setData(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    return () => controller.abort();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading}
};

export default useData;
