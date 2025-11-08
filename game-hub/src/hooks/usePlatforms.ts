import useData from '@/hooks/userData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  games_count: number;
  image: string;
  year_start: number;
  year_end: number;
}

const usePlatforms = () => {
  return useData<Platform>('/platforms/lists/parents');
};

export default usePlatforms;
