import useData from '@/hooks/userData';
import type { Genre } from './UseGenres';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
  released: string;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  return useData<Game>(
    '/games',
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );
};
export default useGames;
