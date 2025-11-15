import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GameCard from '../components/GameCard';

const AllGame = () => {

    const games = useLoaderData(); // array of games

    return (
      <div className='w-11/12 mx-auto' >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {games.map(game => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
      </div>
    );
};

export default AllGame;
