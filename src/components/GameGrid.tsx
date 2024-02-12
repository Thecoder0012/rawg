import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games } = useGames();

  return (
    <div>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding="10">
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
