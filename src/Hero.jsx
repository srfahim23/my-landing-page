import React from 'react';
import About from './About';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600">Welcome to My Profile</h1>
      <p className="mt-4 text-lg text-center text-gray-700">This is a simple boilerplate landing page built with React, TailwindCSS, and Vite.</p>
      <button className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
        Get Started
      </button>

      
    </div>
  );
};

export default Hero;