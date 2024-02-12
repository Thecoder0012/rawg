import { useEffect, useState } from "react";
import axios from "axios";

// interface GameResponse {
//   count: number;
//   results: Game[];
// }

interface Game {
  id: number;
  name: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchGames()
  },[])

  const fetchGames = async ()   => {
    const response = await axios.get("https://api.rawg.io/api/games?key=00de49a887f64d6baafadb0824cef306")
    setGames(response.data.results);
  }

 
  return <div>
    {games.map(() => {
        
    })}

  </div>;
};

export default GameGrid;
