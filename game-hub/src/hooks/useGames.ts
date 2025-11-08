import useData from '@/hooks/userData';

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


const useGames = () => {
  return useData<Game>('/games');
};
export default useGames;
