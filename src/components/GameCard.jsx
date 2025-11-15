import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
    return (
        <div className=" my-10
        group bg-white border border-gray-200 rounded-xl p-4 shadow-md 
        hover:shadow-xl hover:border-purple-500 transition duration-300
        hover:-translate-y-1
      ">

            {/* Game Cover */}
            <div className="overflow-hidden rounded-lg">
                <img
                    src={game.coverPhoto}
                    alt={game.title}
                    className="w-full h-48 object-cover rounded-lg 
                     group-hover:scale-110 transition duration-500"
                />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mt-4 text-gray-900 group-hover:text-purple-600 transition">
                {game.title}
            </h3>

            {/* Category */}
            <p className="text-sm text-gray-500 mt-1">{game.category}</p>

            {/* Ratings */}
            <p className="text-yellow-500 font-semibold mt-2">
                ⭐ {game.ratings}
            </p>

            {/* Developer */}
            <p className="text-gray-600 text-sm mt-1">
                <span className="font-semibold text-purple-600">Developer:</span> {game.developer}
            </p>

            {/* Button */}
            <Link to={`/game-details/${game.id}`}>
                <button
                    className="
  mt-4 w-full bg-gradient-to-r from-orange-700 to-red-500 text-white 
  font-semibold py-2 rounded-lg shadow-md 
  hover:shadow-lg hover:scale-105 transition duration-300
"


                >
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default GameCard;
