import apiClient from '@/Services/api-client';
import React, { useEffect, useState } from 'react';

interface Game {
  id: number;
  name: string;
  image: string;
  rating: number;
  released: string;
}

interface FetchGamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games')
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [error]);

  return (
    <div>
      {error && <p>{error}</p>}

      {games.map((game) => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <p>{game.rating}</p>
          <p>{game.released}</p>
        </div>
      ))}
    </div>
  );
};
export default GameGrid;
