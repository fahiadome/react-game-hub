import axios from 'axios';

const apiKey = import.meta.env.VITE_RAWG_API_KEY;

if (!apiKey) {
  throw new Error(
    'VITE_RAWG_API_KEY is not defined. Please create a .env file with your API key.'
  );
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: apiKey,
  },
});
