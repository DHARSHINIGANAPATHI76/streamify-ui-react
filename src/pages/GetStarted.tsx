
import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MovieCarousel from '../components/MovieCarousel';

const GetStarted = () => {
  const [email, setEmail] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (email) {
      navigate('/login');
    }
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

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

  const faqs = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies and documentaries on thousands of internet-connected devices."
    },
    {
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month. No extra costs, no contracts."
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device."
    },
    {
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 md:p-8">
        <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
        <button
          onClick={() => navigate('/login')}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-medium transition-colors"
        >
          Sign In
        </button>
      </header>

      {/* Hero Section */}
      <div className="text-center px-4 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-lg mb-8">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 text-black rounded border-2 border-gray-300 focus:border-red-500 focus:outline-none"
          />
          <button
            onClick={handleGetStarted}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded flex items-center justify-center gap-2 font-medium transition-colors"
          >
            Get Started
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Trending Section */}
      <div className="px-4 md:px-8 lg:px-16 py-8">
        <MovieCarousel title="Trending Now" movies={trendingMovies} />
      </div>

      {/* FAQ Section */}
      <div className="px-4 md:px-8 lg:px-16 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 border-b border-gray-700">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
              >
                <span className="text-lg md:text-xl font-medium">{faq.question}</span>
                {expandedFAQ === index ? (
                  <Minus className="w-6 h-6" />
                ) : (
                  <Plus className="w-6 h-6" />
                )}
              </button>
              {expandedFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-8 px-4 md:px-8 lg:px-16">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Netflix Clone. This is a demonstration project.</p>
        </div>
      </footer>
    </div>
  );
};

export default GetStarted;
