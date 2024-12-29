import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing icons from react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo">
          {/* Placeholder for logo */}
          <div className="w-16 h-16 bg-gray-200"></div>
        </div>
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Services</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Services</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
