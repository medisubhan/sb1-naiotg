import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-yellow-400 text-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to SupportHub</h1>
        <p className="text-xl mb-8">Your one-stop solution for exceptional customer support</p>
        <a
          href="#contact"
          className="bg-gray-800 text-yellow-400 px-6 py-3 rounded-full inline-flex items-center hover:bg-gray-700 transition duration-300"
        >
          Get Started
          <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;