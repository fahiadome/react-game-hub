import useData from '@/hooks/userData';
import type { GameQuery } from '@/App';

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
  gameQuery: GameQuery
) => {
  return useData<Game>(
    '/games',
    { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id } },
    [gameQuery]
  );
};
export default useGames;
