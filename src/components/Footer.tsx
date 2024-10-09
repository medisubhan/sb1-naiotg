import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">SupportHub</h3>
            <p className="text-gray-400">Empowering businesses with exceptional customer support solutions.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#info" className="hover:text-yellow-400">About</a></li>
              <li><a href="#products" className="hover:text-yellow-400">Products</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                <Instagram size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 SupportHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;