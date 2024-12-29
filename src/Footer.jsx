// Footer.js
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          © {new Date().getFullYear()} Smu Alternative. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-blue-600 transition duration-200" />
          </a>
          <a href="https://linkedin.com/srfahim23" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="hover:text-blue-700 transition duration-200" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-400 transition duration-200" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
