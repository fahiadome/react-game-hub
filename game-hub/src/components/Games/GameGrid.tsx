import useGames from '@/hooks/useGames';

const GameGrid = () => {
  const { games, error } = useGames();

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
