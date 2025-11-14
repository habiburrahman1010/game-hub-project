import React, { useEffect, useState } from "react";
import BannerSlider from "../components/BannerSlider";
import GameCard from "../components/GameCard";

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/game.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort by rating (highest → lowest)
        const sorted = data.sort((a, b) => b.ratings - a.ratings);
        setGames(sorted);
      });
  }, []);

  return (
    <div>
    
      <BannerSlider />

      
      <div className="mt-10  w-11/12 mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center"> Popular Games</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.slice(0, 3).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
