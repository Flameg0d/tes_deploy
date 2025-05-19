import React from "react";
import { Link } from "react-router-dom";
import GambarLogo from '../../assets/maknakarya.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-300 text-white">
      <div className="flex items-center">
        <img src={GambarLogo} alt="Logo" />
      </div>

      <div className="flex space-x-4">
        <Link to="/" className="text-black hover:text-gray-500">Home</Link>
        <Link to="/about" className="text-black hover:text-gray-500">About</Link>
        <Link to="/media" className="text-black hover:text-gray-500">Media</Link>
        <Link to="/news" className="text-black hover:text-gray-500">News</Link>
        <Link to="/joinus" className="text-black hover:text-gray-500">Join Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
