import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', company: 'Tech Solutions Inc.', content: 'SupportHub has revolutionized our customer support process. Our satisfaction rates have skyrocketed!' },
    { name: 'Jane Smith', company: 'E-commerce Experts', content: 'The AI chatbot has significantly reduced our response times. Our customers love the instant support.' },
    { name: 'Mike Johnson', company: 'StartUp Innovators', content: 'Integrating SupportHub was a breeze. It\'s like having a dedicated support team without the overhead.' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;