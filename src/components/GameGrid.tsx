import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface GameResponse {
  count: number;
  results: Game[];
}

interface Game {
  id: number;
  name: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchGames()
  },[])


const fetchGames = async () => {
    const response = await apiClient.get<GameResponse>("/games");
    setGames(response.data.results);
}

 
  return <div>
  {games.map((game, index) => (
  <div key={index}>
    <p>ID: {game.id}</p>
    <p>Name: {game.name}</p>
  </div>
))}


  </div>;
};

export default GameGrid;
