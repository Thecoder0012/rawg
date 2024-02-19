import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface GameResponse {
  count: number;
  results: Game[];
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const controller = new AbortController();

  const fetchGames = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get<GameResponse>("/games", {
        signal: controller.signal,
      });
      console.log(response.data.results);
      setGames(response.data.results);
    } catch (error) {
      //   if (error instanceof CanceledError) {
      //     console.log('Request canceled', error.message);
      //   }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return { games, loading };
};

export default useGames;
