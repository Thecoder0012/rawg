import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Response<T>{
    count: number;
    results: T[];
}
const useData = <T>(path: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get<Response<T>>(path);
      console.log(response.data.results);
      setData(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error}
};

export default useData;
