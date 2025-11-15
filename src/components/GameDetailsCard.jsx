import React from 'react';

const GameDetailsCard = ({game}) => {
    return (
        <div>
             <div className="w-10/12 mx-auto my-10">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-64 object-cover rounded-xl"
        />

        <h1 className="text-3xl font-bold mt-4">{game.title}</h1>
        <p className="text-gray-600 mt-1">{game.category}</p>

        <p className="text-yellow-500 font-bold mt-2">⭐ {game.ratings}</p>

        <p className="mt-2 text-gray-700">
          <span className="font-semibold text-purple-600">Developer:</span>{" "}
          {game.developer}
        </p>

        <p className="text-gray-800 mt-4">{game.description}</p>
      </div>
    </div>
        </div>
    );
};

export default GameDetailsCard;