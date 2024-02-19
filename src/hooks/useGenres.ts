import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface GenreResponse {
    results: Genre[];
  }

interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchGenres = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get<GenreResponse>("/genres");
      setGenres(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchGenres();
  }, []);

  return { genres, loading };

};

export default useGenres;
