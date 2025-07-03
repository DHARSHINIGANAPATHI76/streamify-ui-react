
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Payment = () => {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const navigate = useNavigate();

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$8.99',
      features: [
        'Watch on 1 device at a time',
        'HD quality',
        'Unlimited movies and TV shows',
        'Watch on your laptop, TV, phone and tablet'
      ]
    },
    {
      id: 'standard',
      name: 'Standard',
      price: '$13.99',
      popular: true,
      features: [
        'Watch on 2 devices at a time',
        'Full HD quality',
        'Unlimited movies and TV shows',
        'Watch on your laptop, TV, phone and tablet',
        'Download on 2 devices'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$17.99',
      features: [
        'Watch on 4 devices at a time',
        '4K + HDR quality',
        'Unlimited movies and TV shows',
        'Watch on your laptop, TV, phone and tablet',
        'Download on 6 devices',
        'Netflix spatial audio'
      ]
    }
  ];

  const handleSubscribe = () => {
    // In a real app, this would handle payment processing
    console.log('Selected plan:', selectedPlan);
    alert('Payment would be processed here. Redirecting to home...');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6 border-b border-gray-800">
        <h1 
          className="text-red-600 text-3xl font-bold cursor-pointer"
          onClick={() => navigate('/')}
        >
          Netflix
        </h1>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose your plan</h1>
          <p className="text-gray-400 text-lg">
            Watch anywhere. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative cursor-pointer transition-all ${
                selectedPlan === plan.id 
                  ? 'bg-red-600/20 border-red-600' 
                  : 'bg-gray-900 border-gray-700 hover:border-gray-600'
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-red-600 mt-2">
                  {plan.price}
                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleSubscribe}
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-3 text-lg font-semibold"
          >
            Continue with {plans.find(p => p.id === selectedPlan)?.name} Plan
          </Button>
          
          <p className="text-gray-400 text-sm mt-4">
            You can change or cancel your plan at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
