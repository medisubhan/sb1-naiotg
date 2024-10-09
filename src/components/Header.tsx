import React from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-yellow-400 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">SupportHub</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#info" className="text-gray-800 hover:text-gray-600">About</a></li>
            <li><a href="#products" className="text-gray-800 hover:text-gray-600">Products</a></li>
            <li><a href="#faq" className="text-gray-800 hover:text-gray-600">FAQ</a></li>
            <li><a href="#contact" className="text-gray-800 hover:text-gray-600">Contact</a></li>
          </ul>
        </nav>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-4 py-2 rounded-full bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600" size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;