import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Badge,
  Text,
} from '@chakra-ui/react';
import useGenres, { type Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/Services/Games/image-url';
import ApiError from '../Common/ApiError';

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, error, isLoading, retry } = useGenres();
  
  if (error) {
    return <ApiError error={error} onRetry={retry} compact />;
  }
  
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Text fontSize="2xl" fontWeight="bold" marginBottom={5}>
        Genres
      </Text>

      <List.Root>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="2px" cursor="pointer">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background) || ''}
                alt={genre.name}
                boxSize="32px"
                borderRadius="6px"
                objectFit="cover"
              />
              <Button
                whiteSpace="normal"
                // textOverflow="ellipsis"
                // overflow="hidden"
                colorPalette={selectedGenre?.id === genre.id ? 'green' : 'gray'}
                fontSize="md"
                textAlign="left"
                onClick={() => {
                  onSelectGenre(genre);
                }}
              >
                {genre.name}{' '}
                <Badge
                  colorPalette="green"
                  fontSize="10px"
                  paddingX={1}
                  borderRadius="full"
                >
                  {genre.games_count}
                </Badge>
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
