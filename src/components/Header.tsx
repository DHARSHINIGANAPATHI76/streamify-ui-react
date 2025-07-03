
import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock search suggestions data
  const mockSuggestions = [
    'Stranger Things', 'The Crown', 'Dark', 'The Witcher', 'Money Heist',
    'Breaking Bad', 'Better Call Saul', 'The Office', 'Friends', 'Narcos',
    'House of Cards', 'Black Mirror', 'The Mandalorian', 'Squid Game',
    'Bridgerton', 'Ozark', 'The Queen\'s Gambit', 'Lupin', 'Emily in Paris'
  ];

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 0) {
      const filtered = mockSuggestions.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    console.log('Searching for:', suggestion);
  };

  // Handle click outside to close search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm transition-all duration-300">
      <div className="px-4 md:px-8 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <h1 
              className="text-red-600 text-2xl font-bold cursor-pointer"
              onClick={() => navigate('/')}
            >
              Netflix
            </h1>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-white hover:text-gray-300 transition-colors">
                Home
              </a>
              <a href="/my-netflix" className="text-gray-400 hover:text-white transition-colors">
                MyNetflix
              </a>
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-black/95 border border-gray-700 rounded-lg">
                  <div className="p-3">
                    <input
                      type="text"
                      placeholder="Search for movies, TV shows..."
                      className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      autoFocus
                    />
                  </div>
                  
                  {/* Search Suggestions */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="border-t border-gray-700">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-800 transition-colors text-white text-sm border-b border-gray-700 last:border-b-0"
                        >
                          <div className="flex items-center space-x-3">
                            <Search className="w-4 h-4 text-gray-400" />
                            <span>{suggestion}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Notifications */}
            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
            </button>

            {/* User Menu */}
            <div className="flex items-center space-x-2 relative group">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">U</span>
              </div>
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              
              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-black/95 border border-gray-700 rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button 
                  onClick={() => navigate('/payment')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors"
                >
                  Manage Subscription
                </button>
                <button 
                  onClick={() => navigate('/login')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
