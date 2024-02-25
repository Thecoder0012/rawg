import { HStack, List, ListItem,Image, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-crop';

const GenreList = () => {
  const { data: genres, loading } = useGenres();
  return (
    <>
    {loading && <div>Loading...</div>}
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              borderRadius={8}
              boxSize="30px"
              objectFit="cover"
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  </>
  )
}

export default GenreList