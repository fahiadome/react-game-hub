import useData from '@/hooks/userData';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  games_count: number;
}

const useGenres = () => {
  return useData<Genre>('/genres');
};

export default useGenres;
