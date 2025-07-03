
import React from 'react';
import { Play, Info } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop)',
        }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            The Matrix
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.
          </p>

          <div className="flex items-center space-x-3 text-sm text-gray-300">
            <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">HD</span>
            <span>1999</span>
            <span>•</span>
            <span>2h 16m</span>
            <span>•</span>
            <span>Action, Sci-Fi</span>
            <span>•</span>
            <span className="text-yellow-400">★ 8.7</span>
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <button className="flex items-center space-x-2 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              <Play className="w-5 h-5 fill-current" />
              <span>Play</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-gray-600/70 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600/90 transition-colors">
              <Info className="w-5 h-5" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
