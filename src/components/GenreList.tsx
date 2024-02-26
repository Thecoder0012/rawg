import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-crop";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data: genres, loading } = useGenres();
  return (
    <>
      {loading && <Spinner />}
      <List>
        {!loading &&
          genres.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  alt={genre.name}
                  borderRadius={8}
                  boxSize="30px"
                  objectFit="cover"
                />
                <Button
                  onClick={() => onSelectedGenre(genre)}
                  variant="link"
                  fontSize="lg"
                >
                  {genre.name}
                </Button>{" "}
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
