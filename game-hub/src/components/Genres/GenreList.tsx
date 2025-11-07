import useGenres from '@/hooks/UseGenres';
import { Spinner, Text } from '@chakra-ui/react';
const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  if (error) return <Text>{error}</Text>;
  if (isLoading) return <Spinner />;
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>
          <Text fontSize="lg">{genre.name}</Text>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
