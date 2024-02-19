import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games,loading } = useGames();
  const skeletons = [...Array(20).keys()]
  return (
    <div>
      
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding="10">
        {isLoading && skeletons.map((skeleton) => (
          <GameCardContainer>
              <GameCardSkeleton/>
          </GameCardContainer>
        )) }
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
