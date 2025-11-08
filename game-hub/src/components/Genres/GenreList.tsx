import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '@/hooks/UseGenres';
import getCroppedImageUrl from '@/Services/Games/image-url';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  if (error) return <Text>{error}</Text>;
  if (isLoading) return <Spinner />;
  return (
    <List.Root>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY="5px" cursor="pointer">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              boxSize="32px"
              borderRadius="6px"
              objectFit="cover"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
