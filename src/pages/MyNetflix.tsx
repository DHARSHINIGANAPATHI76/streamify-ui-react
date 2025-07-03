
import React, { useState } from 'react';
import { User, ChevronDown, Bell, Plus, Play, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import MovieCarousel from '../components/MovieCarousel';

const MyNetflix = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const notificationMovies = [
    {
      id: 101,
      title: "New Release: Wednesday",
      image: "https://images.unsplash.com/photo-1489599808821-c065d4e7c55a?w=300&h=400&fit=crop",
      rating: 8.5
    },
    {
      id: 102,
      title: "Award Winner: The Crown",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop",
      rating: 9.1
    },
    {
      id: 103,
      title: "Top 10: Stranger Things",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 8.8
    }
  ];

  const downloadsMovies = [
    {
      id: 201,
      title: "Downloaded: Dark",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop",
      rating: 8.8
    },
    {
      id: 202,
      title: "Downloaded: Ozark",
      image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=300&h=400&fit=crop",
      rating: 8.4
    }
  ];

  const myListMovies = [
    {
      id: 301,
      title: "Add to List",
      image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=300&h=400&fit=crop",
      rating: 8.2,
      isAddButton: true
    },
    {
      id: 302,
      title: "Breaking Bad",
      image: "https://images.unsplash.com/photo-1489599808821-c065d4e7c55a?w=300&h=400&fit=crop",
      rating: 9.5
    }
  ];

  const continueWatching = [
    {
      id: 401,
      title: "The Mandalorian",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop",
      rating: 8.7,
      progress: 65
    },
    {
      id: 402,
      title: "House of Cards",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop",
      rating: 8.6,
      progress: 32
    }
  ];

  const trendingMovies = [
    {
      id: 501,
      title: "Popular Now",
      image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=300&h=400&fit=crop",
      rating: 8.9
    },
    {
      id: 502,
      title: "Trending Today",
      image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=300&h=400&fit=crop",
      rating: 8.1
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Custom Header for MyNetflix */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="px-4 md:px-8 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 
                className="text-red-600 text-2xl font-bold cursor-pointer"
                onClick={() => navigate('/')}
              >
                Netflix
              </h1>
              
              <nav className="hidden md:flex space-x-6">
                <a href="/" className="text-white hover:text-gray-300 transition-colors">
                  Home
                </a>
                <a href="/my-netflix" className="text-red-500 font-semibold">
                  MyNetflix
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 hover:bg-gray-800 rounded-full transition-colors relative"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-red-600 text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    3
                  </span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-black/95 border border-gray-700 rounded-lg max-h-96 overflow-y-auto">
                    <div className="p-4 border-b border-gray-700">
                      <h3 className="font-semibold">Notifications</h3>
                    </div>
                    <div className="p-2">
                      {notificationMovies.map((movie) => (
                        <div key={movie.id} className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded cursor-pointer">
                          <img src={movie.image} alt={movie.title} className="w-12 h-16 object-cover rounded" />
                          <div>
                            <p className="text-sm font-medium">{movie.title}</p>
                            <p className="text-xs text-gray-400">Rating: {movie.rating}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 hover:bg-gray-800 rounded-full p-2 transition-colors"
                >
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {showUserMenu && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-black/95 border border-gray-700 rounded-lg py-2">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors">
                      Change User
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors">
                      Account
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors">
                      Manage Profiles
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors">
                      Help
                    </button>
                    <hr className="border-gray-700 my-2" />
                    <button 
                      onClick={() => navigate('/login')}
                      className="w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-20 px-4 md:px-8 lg:px-16 pb-8 space-y-12">
        {/* Welcome Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to MyNetflix</h1>
          <p className="text-gray-400">Your personalized Netflix experience</p>
        </div>

        {/* Notification Movies Carousel */}
        <MovieCarousel title="Latest Updates & Notifications" movies={notificationMovies} />

        {/* Downloads Section */}
        <MovieCarousel title="Downloads" movies={downloadsMovies} />

        {/* My List Section */}
        <MovieCarousel title="My List" movies={myListMovies} />

        {/* Continue Watching */}
        <MovieCarousel title="Continue Watching" movies={continueWatching} showProgress={true} />

        {/* Additional Trending Content */}
        <MovieCarousel title="Recommended for You" movies={trendingMovies} />
      </div>
    </div>
  );
};

export default MyNetflix;
