
import React, { useState } from 'react';
import { Play, Plus, ThumbsUp } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
  progress?: number;
}

interface MovieCardProps {
  movie: Movie;
  showProgress?: boolean;
}

const MovieCard = ({ movie, showProgress = false }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-48 md:w-64 cursor-pointer transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Movie Poster */}
      <div className="relative rounded-lg overflow-hidden bg-gray-800">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-32 md:h-36 object-cover transition-all duration-300"
        />
        
        {/* Progress Bar for Continue Watching */}
        {showProgress && movie.progress && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
            <div
              className="h-full bg-red-600 transition-all duration-300"
              style={{ width: `${movie.progress}%` }}
            />
          </div>
        )}

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 animate-fade-in">
            <div className="flex space-x-2">
              <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </button>
              <button className="bg-gray-600/80 text-white p-2 rounded-full hover:bg-gray-600 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
              <button className="bg-gray-600/80 text-white p-2 rounded-full hover:bg-gray-600 transition-colors">
                <ThumbsUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Movie Info */}
      <div className="mt-2 space-y-1">
        <h3 className="text-white font-semibold text-sm md:text-base truncate">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-yellow-400 text-xs md:text-sm">
            ★ {movie.rating}
          </span>
          {showProgress && movie.progress && (
            <span className="text-gray-400 text-xs">
              {movie.progress}% watched
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
