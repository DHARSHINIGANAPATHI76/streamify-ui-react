
import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import MovieCarousel from '../components/MovieCarousel';

const Index = () => {
  const trendingMovies = [
    {
      id: 1,
      title: "Stranger Things",
      image: "https://images.unsplash.com/photo-1489599808821-c065d4e7c55a?w=300&h=400&fit=crop",
      rating: 8.7
    },
    {
      id: 2,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop",
      rating: 9.1
    },
    {
      id: 3,
      title: "Dark",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 8.8
    },
    {
      id: 4,
      title: "The Witcher",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop",
      rating: 8.2
    },
    {
      id: 5,
      title: "Money Heist",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
      rating: 8.5
    },
    {
      id: 6,
      title: "Ozark",
      image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=300&h=400&fit=crop",
      rating: 8.4
    }
  ];

  const topPicks = [
    {
      id: 7,
      title: "Breaking Bad",
      image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=300&h=400&fit=crop",
      rating: 9.5
    },
    {
      id: 8,
      title: "Better Call Saul",
      image: "https://images.unsplash.com/photo-1489599808821-c065d4e7c55a?w=300&h=400&fit=crop",
      rating: 8.9
    },
    {
      id: 9,
      title: "The Office",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 9.0
    },
    {
      id: 10,
      title: "Friends",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
      rating: 8.9
    },
    {
      id: 11,
      title: "The Good Place",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop",
      rating: 8.8
    },
    {
      id: 12,
      title: "Westworld",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop",
      rating: 8.6
    }
  ];

  const actionMovies = [
    {
      id: 13,
      title: "John Wick",
      image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=300&h=400&fit=crop",
      rating: 8.4
    },
    {
      id: 14,
      title: "Mad Max",
      image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=300&h=400&fit=crop",
      rating: 8.1
    },
    {
      id: 15,
      title: "The Matrix",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=400&fit=crop",
      rating: 8.7
    },
    {
      id: 16,
      title: "Blade Runner",
      image: "https://images.unsplash.com/photo-1489599808821-c065d4e7c55a?w=300&h=400&fit=crop",
      rating: 8.1
    },
    {
      id: 17,
      title: "Die Hard",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 8.2
    },
    {
      id: 18,
      title: "Terminator",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop",
      rating: 8.0
    }
  ];

  const continueWatching = [
    {
      id: 19,
      title: "The Mandalorian",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop",
      rating: 8.7,
      progress: 65
    },
    {
      id: 20,
      title: "House of Cards",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop",
      rating: 8.6,
      progress: 32
    },
    {
      id: 21,
      title: "Narcos",
      image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=300&h=400&fit=crop",
      rating: 8.8,
      progress: 78
    },
    {
      id: 22,
      title: "Mindhunter",
      image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=300&h=400&fit=crop",
      rating: 8.6,
      progress: 45
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroBanner />
      
      <div className="px-4 md:px-8 lg:px-16 pb-8 space-y-8">
        <MovieCarousel title="Trending Now" movies={trendingMovies} />
        <MovieCarousel title="Top Picks for You" movies={topPicks} />
        <MovieCarousel title="Action Movies" movies={actionMovies} />
        <MovieCarousel title="Continue Watching" movies={continueWatching} showProgress={true} />
      </div>
    </div>
  );
};

export default Index;
