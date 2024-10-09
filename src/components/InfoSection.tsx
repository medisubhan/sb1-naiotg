import React from 'react';
import { Info } from 'lucide-react';

const InfoSection = () => {
  return (
    <section id="info" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Our Company</h2>
        <div className="flex items-center justify-center mb-8">
          <Info size={48} className="text-yellow-500 mr-4" />
          <p className="text-lg max-w-2xl text-gray-700">
            SupportHub is a leading customer support solution provider, dedicated to enhancing the customer experience through innovative technology and personalized service. With years of industry expertise, we empower businesses to build lasting relationships with their customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;