import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyLogo</div>
        <div className="space-x-4">
          <a href="#home" className="text-gray-300 hover:text-white">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#services" className="text-gray-300 hover:text-white">Services</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;