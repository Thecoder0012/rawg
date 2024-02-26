import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import useGenres,{ Genre} from "./hooks/useGenres";


interface Props {
  onSelectedGenre: (genre: Genre) => void;
}
function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: `1fr`,
          lg: `"200px 1fr"`,
        }}
        
      >
        <GridItem gridArea={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea={"aside"} paddingX={5}>
        <GenreList onSelectedGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem gridArea={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
    </>
  );
}

export default App;
