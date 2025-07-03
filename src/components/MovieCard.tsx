
import React from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/watch/${movie.id}`);
  };

  return (
    <div className="group relative min-w-[200px] h-[300px] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10">
      {/* Movie Poster */}
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        
        {/* Progress Bar */}
        {showProgress && movie.progress && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
            <div 
              className="h-full bg-red-600 transition-all duration-300"
              style={{ width: `${movie.progress}%` }}
            />
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
          {/* Top Section */}
          <div className="flex justify-end">
            <button className="w-8 h-8 bg-gray-800/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-700">
              <Plus className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Bottom Section */}
          <div className="space-y-3">
            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={handlePlay}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Play className="w-4 h-4 text-black ml-0.5" />
              </button>
              <button className="w-8 h-8 bg-gray-800/80 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <ThumbsUp className="w-4 h-4 text-white" />
              </button>
              <button className="w-8 h-8 bg-gray-800/80 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <ChevronDown className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Movie Info */}
            <div className="text-white">
              <h3 className="font-semibold text-sm mb-1">{movie.title}</h3>
              <div className="flex items-center space-x-2 text-xs text-gray-300">
                <span className="text-green-500">★ {movie.rating}</span>
                {showProgress && movie.progress && (
                  <span>{movie.progress}% watched</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
