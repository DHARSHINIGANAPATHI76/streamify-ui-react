
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle authentication
    console.log('Auth attempt:', formData);
    navigate('/');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1920&h=1080&fit=crop)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Header */}
      <header className="relative z-10 p-6">
        <h1 
          className="text-red-600 text-3xl font-bold cursor-pointer"
          onClick={() => navigate('/')}
        >
          Netflix
        </h1>
      </header>

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-100px)]">
        <div className="bg-black/80 p-8 rounded-lg w-full max-w-md mx-4">
          <h2 className="text-white text-3xl font-bold mb-6">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-600 text-white mt-1"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-600 text-white mt-1"
                required
              />
            </div>
            
            {isSignUp && (
              <div>
                <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="bg-gray-800 border-gray-600 text-white mt-1"
                  required
                />
              </div>
            )}
            
            <Button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 mt-6"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
          </form>
          
          <div className="mt-6 text-gray-400 text-center">
            {isSignUp ? 'Already have an account?' : 'New to Netflix?'}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-white ml-2 hover:underline"
            >
              {isSignUp ? 'Sign in now' : 'Sign up now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
