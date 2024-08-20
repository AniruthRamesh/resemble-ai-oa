import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
            <Link to="/" className="text-gray-800 hover:text-gray-600">
                <img src="/images/resemble_ai.jpg" alt="Logo" className="h-10 w-auto" />
            </Link>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link to="/voices" className="text-gray-800 hover:text-gray-600">
            Voices
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-gray-600">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;



// Better Structure would be -> separate folder with index.js containing the whole Navbar
// Header which contains the logo and NavMenu -> containing all the navbar components