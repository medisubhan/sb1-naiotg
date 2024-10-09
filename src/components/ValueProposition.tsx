import React from 'react';
import { Clock, Smile, TrendingUp } from 'lucide-react';

const ValueProposition = () => {
  const benefits = [
    { title: '24/7 Support', description: 'Round-the-clock assistance for your customers', icon: Clock },
    { title: 'Improved Satisfaction', description: 'Boost customer loyalty and retention', icon: Smile },
    { title: 'Increased Efficiency', description: 'Streamline your support processes', icon: TrendingUp },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <benefit.icon size={48} className="text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;