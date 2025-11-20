import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";


const GameCard = ({ game }) => {
    return (
        <div className=" my-10
        group bg-white border border-gray-200 rounded-xl p-6 shadow-md 
        hover:shadow-xl hover:border-purple-500 transition duration-300
        hover:-translate-y-1
      ">


            <div className="overflow-hidden rounded-lg">
                <img
                    src={game.coverPhoto}
                    alt={game.title}
                    className="w-full h-48 object-cover rounded-lg 
                     group-hover:scale-110 transition duration-500"
                />
            </div>

         
            <h3 className="text-xl font-bold mt-4 text-gray-900 group-hover:text-purple-600 transition">
                {game.title}
            </h3>

         
            <p className="text-sm text-gray-500 mt-1">{game.category}</p>

           
            <p className="text-yellow-500 font-semibold mt-2 flex items-center gap-2">
                <FaStar /> {game.ratings}
            </p>

           
            <p className="text-gray-600 text-sm mt-1">
                <span className="font-semibold text-purple-600">Developer:</span> {game.developer}
            </p>

           
            <Link to={`/game-details/${game.id}`}>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full bg-gradient-to-r from-orange-700 to-red-500 text-white font-semibold py-2 rounded-lg shadow-md"
                >
                    View Details
                </motion.button>


            </Link>
        </div>
    );
};

export default GameCard;
