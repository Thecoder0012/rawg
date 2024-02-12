import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} overflow="hidden" borderRadius="10" />
      <CardBody>
        <Heading fontSize={"2x1"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
