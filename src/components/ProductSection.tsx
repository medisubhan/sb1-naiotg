import React from 'react';
import { MessageSquare, PhoneCall, Bot } from 'lucide-react';

const ProductSection = () => {
  const products = [
    { name: 'Live Chat', description: 'Real-time customer support', icon: MessageSquare },
    { name: 'Call Center', description: 'Voice support solutions', icon: PhoneCall },
    { name: 'AI Chatbot', description: 'Automated customer assistance', icon: Bot },
  ];

  return (
    <section id="products" className="py-16 bg-yellow-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <product.icon size={48} className="text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;